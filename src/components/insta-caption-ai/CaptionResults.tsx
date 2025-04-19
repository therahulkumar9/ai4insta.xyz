
import { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CaptionResultsProps {
  captions: string[];
}

const CaptionResults = ({ captions }: CaptionResultsProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Caption copied to clipboard! 📋");
    
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  if (!captions.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-purple-500" />
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          Generated Captions
        </h2>
      </div>
      <div className="grid gap-4">
        {captions.map((caption, index) => (
          <Card 
            key={index} 
            className={cn(
              "p-6 relative group transition-all duration-300",
              "bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-800 dark:to-gray-900/50",
              "hover:shadow-xl hover:-translate-y-1",
              "border border-purple-100 dark:border-purple-900/20"
            )}
          >
            <p 
              className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap mb-2 pr-12"
              dangerouslySetInnerHTML={{ __html: caption.replace(/\n/g, '<br>') }}
            />
            <button
              className={cn(
                "absolute top-4 right-4 p-2 rounded-full",
                "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
                "hover:bg-purple-100 dark:hover:bg-purple-900/30",
                "transition-all duration-300",
                "group/button"
              )}
              onClick={() => copyToClipboard(caption, index)}
            >
              {copiedIndex === index ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover/button:text-purple-600 dark:group-hover/button:text-purple-400" />
              )}
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaptionResults;
