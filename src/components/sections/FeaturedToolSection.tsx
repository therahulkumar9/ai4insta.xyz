import { ToolCard } from "../ToolCard"
import { Button } from "../ui/button"
import { Instagram, Hash } from "lucide-react"

export const FeaturedToolSection = () => {
  return (
    <section
      id="featured-tool"
      className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-orange-500/10" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="relative">
            <span className="text-2xl relative">⭐</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Featured Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a href="/insta-caption-ai">
            <ToolCard
              title="InstaCaptionAI"
              description="Paste your post idea or upload a photo — our AI will generate engaging, relevant captions that resonate with your audience and drive engagement."
              icon={
                <Instagram className="w-7 h-7 text-pink-600 dark:text-pink-400" />
              }
            />
          </a>

          <a href="/insta-hashtag-ai">
            <ToolCard
              title="InstaHashtagAI"
              description="Boost your reach with smart, AI-generated hashtags tailored to your post and audience. Just describe your content or upload a photo — we’ll do the rest."
              icon={
                <Hash className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              }
              comingSoonDate="Coming on 26th June"
            />

          </a>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/insta-caption-ai">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
              Try Captions
            </Button>
          </a>
          <a href="/insta-hashtag-ai">
            <Button className="bg-gradient-to-r from-pink-600 to-orange-500 text-white hover:opacity-90">
              Try Hashtags
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
