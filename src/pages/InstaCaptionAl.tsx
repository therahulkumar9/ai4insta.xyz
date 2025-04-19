import { useState } from "react";
import { Camera, ShieldCheck, Zap, Gift, Settings } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/insta-caption-ai/Header";
import Navbar from "@/components/insta-caption-ai/Navbar";
import ImageUploader from "@/components/insta-caption-ai/ImageUploader";
import CaptionOptionsForm, { CaptionOptions } from "@/components/insta-caption-ai/CaptionOptionsForm";
import CaptionResults from "@/components/insta-caption-ai/CaptionResults";
import ApiKeyModal from "@/components/insta-caption-ai/ApiKeyModal";
import { generateCaptions } from "@/services/captionService";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Footer from "@/components/insta-caption-ai/Footer";
import HowItWorks from "@/components/insta-caption-ai/HowItWorks";
import FAQ from "@/components/insta-caption-ai/FAQ";
import PricingSection from "@/components/insta-caption-ai/PricingSection";

const features = [
  {
    icon: <Camera className="h-6 w-6 text-purple-600" />,
    title: "AI-Powered Captions",
    description: "Generate engaging Instagram captions instantly using advanced AI technology"
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-600" />,
    title: "Multiple Languages",
    description: "Create captions in various languages including English, Hindi, Spanish, and more"
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-600" />,
    title: "Custom Tone",
    description: "Choose from different writing tones or create your own custom tone"
  },
  {
    icon: <Gift className="h-6 w-6 text-purple-600" />,
    title: "Hashtags & Emojis",
    description: "Automatically add relevant hashtags and emojis to boost engagement"
  }
];

const InstaCaptionAl = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [captions, setCaptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast: uiToast } = useToast();
  const [options, setOptions] = useState<CaptionOptions>({
    language: "english",
    variants: 3,
    addHashtags: true,
    addEmojis: true,
    tone: "casual",
    customTone: "",
    userDescription: "",
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    
    setCaptions([]);
    setError(null);
    setOptions(prev => ({
      ...prev,
      userDescription: "",
    }));
  };

  const handleGenerateCaptions = async () => {
    if (!uploadedImage) {
      uiToast({
        title: "No image uploaded",
        description: "Please upload an image first.",
        variant: "destructive",
      });
      return;
    }

    if (!localStorage.getItem('gemini_api_key')) {
      setIsSettingsOpen(true);
      return;
    }

    setIsLoading(true);
    setError(null);
    setCaptions([]);
    
    try {
      const generatedCaptions = await generateCaptions(uploadedImage, options);
      if (generatedCaptions.length === 0) {
        throw new Error("No captions were generated. Try adjusting your options or using a different image.");
      }
      setCaptions(generatedCaptions.slice(0, options.variants));
      toast.success("🎉 Captions generated successfully!");
    } catch (error) {
      console.error('Error in generate captions handler:', error);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setError(errorMessage);
      toast.error("Failed to generate captions");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetStartedClick = () => {
    const captionSection = document.getElementById("caption-generator");
    if (captionSection) {
      captionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-4 text-center relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="max-w-5xl mx-auto relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
            Create Perfect Instagram Captions with AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your Instagram posts with AI-powered captions that engage your audience and express your creativity.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg"
            onClick={handleGetStartedClick}
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 mt-[-80px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Powerful Features for Perfect Captions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="caption-generator" className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Generate Your Caption
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Upload Your Photo
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSettingsOpen(true)}
                  className="flex items-center gap-2 hover:bg-purple-50 dark:hover:bg-gray-800"
                >
                  <Settings className="h-4 w-4" />
                  API Settings
                </Button>
              </div>
              <ImageUploader onImageUpload={handleImageUpload} imagePreview={imagePreview} />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Caption Options
              </h3>
              <CaptionOptionsForm
                options={options}
                setOptions={setOptions}
                onGenerate={handleGenerateCaptions}
                isLoading={isLoading}
                imageUploaded={!!uploadedImage}
              />
            </div>
          </div>

          {error && (
            <div className="mt-8">
              <Alert variant="destructive" className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/50">
                <AlertTitle>Error generating captions</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}

          <div className="mt-8">
            <CaptionResults captions={captions} />
          </div>
        </div>
      </section>

      <HowItWorks />
      <PricingSection />
      <FAQ />
      <Footer />
      <ApiKeyModal open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
    </div>
  );
};

export default InstaCaptionAl;
