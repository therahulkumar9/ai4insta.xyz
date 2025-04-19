import { motion } from "framer-motion"
import { ToolCard } from "./ToolCard"
import { Instagram } from "lucide-react"

export const ToolsSection = () => {
  return (
    <a href="/insta-caption-ai">
    <div className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8 md:mb-12"
        >
          <span className="text-2xl md:text-3xl">🛠️</span>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Our AI Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ToolCard
              title="InstaCaptionAI"
              description="Generate engaging, relevant captions for your Instagram posts using advanced AI. Stand out with creative and compelling content."
              icon={
                <Instagram className="w-7 h-7 text-pink-600 dark:text-pink-400" />
              }
            />
          </motion.div>
          {/* More tools can be added here in the future */}
        </div>
      </div>
    </div>
    </a>
  )
}
