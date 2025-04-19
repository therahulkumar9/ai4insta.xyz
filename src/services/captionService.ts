
import { CaptionOptions } from "@/components/insta-caption-ai/CaptionOptionsForm";

interface GeminiResponse {
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
  candidates?: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
}

export const generateCaptions = async (
  imageFile: File | null,
  options: CaptionOptions
): Promise<string[]> => {
  if (!imageFile) {
    throw new Error("No image provided");
  }

  // Convert image to base64
  const base64Image = await fileToBase64(imageFile);
  const apiKey = localStorage.getItem('gemini_api_key');
  
  if (!apiKey) {
    throw new Error("Please provide your Gemini API key in settings");
  }

  try {
    const prompt = generatePrompt(options);
    // Updated endpoint to use gemini-1.5-flash instead of gemini-pro-vision
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: imageFile.type,
                  data: base64Image.split(',')[1]
                }
              }
            ]
          }],
          generation_config: {
            temperature: 0.7,
            max_output_tokens: 1024,
          }
        })
      }
    );

    const data: GeminiResponse = await response.json();
    
    if (!response.ok) {
      console.error('API response error:', data);
      if (data.error && data.error.message) {
        throw new Error(data.error.message);
      } else {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
    }
    
    if (data.error) {
      console.error('Gemini API error:', data.error);
      throw new Error(data.error.message || "Unknown API error occurred");
    }

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No captions generated. Try a different image or description.");
    }

    // Parse the response text
    const generatedText = data.candidates[0].content.parts[0].text;
    
    // Process the captions more robustly
    let captions = [];
    
    // Split by common caption separators while preserving hashtags and emojis
    if (generatedText.includes("\n\n")) {
      // Split by double newlines, which is the requested separator
      captions = generatedText
        .split("\n\n")
        .filter(caption => caption.trim().length > 0);
    } else if (generatedText.includes("\n")) {
      // Fallback: Split by single newlines if double newlines aren't present
      captions = generatedText
        .split("\n")
        .filter(caption => caption.trim().length > 0);
    } else {
      // If no newlines at all, treat the whole text as one caption
      captions = [generatedText];
    }

    // Clean up captions and ensure we have the requested number
    const cleanedCaptions = captions
      .map(caption => caption.trim())
      .filter(caption => caption.length > 0)
      .slice(0, options.variants);
    
    // Ensure we have exactly the requested number of captions
    if (cleanedCaptions.length < options.variants) {
      console.warn(`Requested ${options.variants} captions but only got ${cleanedCaptions.length}`);
    }

    return cleanedCaptions;
  } catch (error) {
    console.error('Error generating captions:', error);
    throw error;
  }
};

const generatePrompt = (options: CaptionOptions): string => {
  const {
    language,
    variants,
    addHashtags,
    addEmojis,
    tone,
    customTone,
    userDescription
  } = options;

  // Create a more specific prompt
  let prompt = language === "hinglish" 
    ? `Generate ${variants} unique and creative Instagram captions in Hinglish (mix of Hindi and English) for this image`
    : `Generate ${variants} unique and creative Instagram captions in ${language} for this image`;
  
  if (userDescription) {
    prompt += `. Context about the image: ${userDescription}`;
  }

  if (tone === 'custom' && customTone) {
    prompt += `. Use this specific tone: ${customTone}`;
  } else {
    prompt += `. Use a ${tone} tone`;
  }

  if (addHashtags) {
    prompt += `. Include relevant hashtags with each caption. IMPORTANT: All hashtags must be in lowercase (e.g., #cat #catlove). You can include emojis with hashtags like #love❤️ #smile😊`;
  }

  if (addEmojis) {
    prompt += `. Include appropriate emojis with each caption`;
  }

  // More specific instructions to avoid heading/caption confusion and ensure separator clarity
  prompt += ". Format each caption as a complete, standalone text. Do NOT include caption numbers, headings, or labels. Separate each caption with two newline characters (\\n\\n). Each caption should be ready to copy-paste directly to Instagram.";

  return prompt;
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};
