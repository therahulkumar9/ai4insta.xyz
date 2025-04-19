import { useState } from "react"
import { Check, Hash, Smile } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface CaptionOptions {
  language: string
  variants: number
  addHashtags: boolean
  addEmojis: boolean
  tone: string
  customTone: string
  userDescription: string
}

interface CaptionOptionsFormProps {
  options: CaptionOptions
  setOptions: React.Dispatch<React.SetStateAction<CaptionOptions>>
  onGenerate: () => void
  isLoading: boolean
  imageUploaded: boolean
}

const languageOptions = [
  { value: "english", label: "English" },
  { value: "hinglish", label: "Hinglish" },
  { value: "bhojpuri", label: "Bhojpuri" },
  { value: "hindi", label: "Hindi" },
  { value: "sanskrit", label: "Sanskrit" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "italian", label: "Italian" },
  { value: "portuguese", label: "Portuguese" },
  { value: "russian", label: "Russian" },
  { value: "japanese", label: "Japanese" },
  { value: "korean", label: "Korean" },
  { value: "chinese", label: "Chinese" },
  { value: "arabic", label: "Arabic" },
  { value: "turkish", label: "Turkish" },
  { value: "bengali", label: "Bengali" },
  { value: "urdu", label: "Urdu" },
  { value: "swedish", label: "Swedish" },
  { value: "dutch", label: "Dutch" },
  { value: "greek", label: "Greek" },
  { value: "polish", label: "Polish" },
  { value: "vietnamese", label: "Vietnamese" },
  { value: "thai", label: "Thai" },
  { value: "indonesian", label: "Indonesian" },
  { value: "malay", label: "Malay" },
  { value: "tamil", label: "Tamil" },
  { value: "telugu", label: "Telugu" },
  { value: "marathi", label: "Marathi" },
  { value: "gujarati", label: "Gujarati" },
  { value: "punjabi", label: "Punjabi" }, // Added Punjabi
  { value: "malayalam", label: "Malayalam" }, // Common in Kerala
  { value: "kannada", label: "Kannada" }, // Widely spoken in Karnataka
  { value: "odia", label: "Odia" }, // Common in Odisha
  { value: "assamese", label: "Assamese" }, // Common in Assam
  { value: "maithili", label: "Maithili" }, // Spoken in Bihar and parts of Jharkhand
  { value: "dogri", label: "Dogri" }, // Common in Jammu & Kashmir
  { value: "kashmiri", label: "Kashmiri" }, // Spoken in Jammu & Kashmir
  { value: "sindhi", label: "Sindhi" }, // Spoken by Sindhi communities across India
  { value: "nepali", label: "Nepali" }, // Spoken in regions near Nepal
]

const toneOptions = [
  { value: "formal", label: "👔 Formal" },
  { value: "friendly", label: "🙂 Friendly" },
  { value: "casual", label: "😎 Casual" },
  { value: "professional", label: "💼 Professional" },
  { value: "diplomatic", label: "🤝 Diplomatic" },
  { value: "confident", label: "💪 Confident" },
  { value: "middle-school", label: "📕 Middle school" },
  { value: "high-school", label: "📗 High school" },
  { value: "academic", label: "🎓 Academic" },
  { value: "simplified", label: "📖 Simplified" },
  { value: "vivid", label: "🦄 Vivid" },
  { value: "empathetic", label: "🤗 Empathetic" },
  { value: "spiritual", label: "🧘‍♂️ Spiritual" },
  { value: "aesthetic", label: "🎨 Aesthetic" },
  { value: "sarcastic", label: "😏 Sarcastic" },
  { value: "romantic", label: "💖 Romantic" },
  { value: "sadness", label: "😢 Sadness" },
  { value: "revenge", label: "😈 Revenge" },
  { value: "attitude", label: "😎 Attitude" },
  { value: "luxury", label: "💎 Luxury" },
  { value: "engaging", label: "👍 Engaging" },
  { value: "direct", label: "➡️ Direct" },
  { value: "persuasive", label: "🎯 Persuasive" },
  { value: "custom", label: "🧠 Custom" },
]

const CaptionOptionsForm = ({
  options,
  setOptions,
  onGenerate,
  isLoading,
  imageUploaded,
}: CaptionOptionsFormProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="language" className="text-sm font-medium">
              Language
            </Label>
            <Select
              value={options.language}
              onValueChange={(value) =>
                setOptions({ ...options, language: value })
              }
            >
              <SelectTrigger
                id="language"
                className="w-full bg-white dark:bg-gray-800"
              >
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="variants" className="text-sm font-medium">
              Caption Variants
            </Label>
            <Select
              value={options.variants.toString()}
              onValueChange={(value) =>
                setOptions({ ...options, variants: parseInt(value) })
              }
            >
              <SelectTrigger
                id="variants"
                className="w-full bg-white dark:bg-gray-800"
              >
                <SelectValue placeholder="Number of variants" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1} Caption{i === 0 ? "" : "s"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-3 rounded-lg">
            <Switch
              id="hashtags"
              checked={options.addHashtags}
              onCheckedChange={(checked) =>
                setOptions({ ...options, addHashtags: checked })
              }
            />
            <Label
              htmlFor="hashtags"
              className="flex items-center cursor-pointer"
            >
              <Hash className="w-4 h-4 mr-2 text-purple-500" />
              Add Hashtags
            </Label>
          </div>

          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-3 rounded-lg">
            <Switch
              id="emojis"
              checked={options.addEmojis}
              onCheckedChange={(checked) =>
                setOptions({ ...options, addEmojis: checked })
              }
            />
            <Label
              htmlFor="emojis"
              className="flex items-center cursor-pointer"
            >
              <Smile className="w-4 h-4 mr-2 text-purple-500" />
              Add Emojis
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tone" className="text-sm font-medium">
            Writing Tone
          </Label>
          <Select
            value={options.tone}
            onValueChange={(value) => setOptions({ ...options, tone: value })}
          >
            <SelectTrigger
              id="tone"
              className="w-full bg-white dark:bg-gray-800"
            >
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {toneOptions.map((tone) => (
                <SelectItem key={tone.value} value={tone.value}>
                  {tone.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {options.tone === "custom" && (
          <div className="space-y-2">
            <Label htmlFor="customTone" className="text-sm font-medium">
              Custom Tone Description
            </Label>
            <Input
              id="customTone"
              placeholder="Describe your desired writing tone..."
              value={options.customTone}
              onChange={(e) =>
                setOptions({ ...options, customTone: e.target.value })
              }
              className="bg-white dark:bg-gray-800"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-medium">
            Image Description (optional)
          </Label>
          <Textarea
            id="description"
            placeholder="Add details about your image to improve caption quality..."
            className="min-h-[80px] bg-white dark:bg-gray-800"
            value={options.userDescription}
            onChange={(e) =>
              setOptions({ ...options, userDescription: e.target.value })
            }
          />
        </div>

        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg"
          disabled={!imageUploaded || isLoading}
          onClick={onGenerate}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating...
            </span>
          ) : (
            <span className="flex items-center">
              <Check className="mr-2" size={18} />
              Generate Captions
            </span>
          )}
        </Button>
      </div>
    </Card>
  )
}

export default CaptionOptionsForm
