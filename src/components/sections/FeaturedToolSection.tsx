import { ToolCard } from "../ToolCard"
import { Button } from "../ui/button"
import { Instagram } from "lucide-react"

export const FeaturedToolSection = () => {
  return (
  <a href="/insta-caption-ai">
    <section
      id="featured-tool"
      className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-orange-500/10" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="relative">
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-20 animate-pulse" /> */}
            <span className="text-2xl relative">⭐</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Featured Tool
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <ToolCard
            title="InstaCaptionAI"
            description="Paste your post idea or upload a photo — our AI will generate engaging, relevant captions that resonate with your audience and drive engagement. Start with a simple description, and we'll craft the perfect caption."
            icon={
              <Instagram className="w-7 h-7 text-pink-600 dark:text-pink-400" />
            }
          />
          <a href="/insta-caption-ai">
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
              Try For Free
            </Button>
            <Button
              variant="outline"
              className="border-pink-600/20 hover:bg-pink-600/5"
            >
              Learn More
            </Button>
          </div>
          </a>
        </div>
      </div>
    </section>
    </a>
  )
}
