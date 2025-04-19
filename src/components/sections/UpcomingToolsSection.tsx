import { motion } from "framer-motion"
import { Card } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

export const UpcomingToolsSection = () => {
  const upcomingTools = [
    {
      name: "Hashtag Generator",
      description: "Generate relevant hashtags for maximum reach",
      date: "Coming Q2 2025",
      icon: "🏷️",
    },
    {
      name: "Bio Generator",
      description: "Generate catchy and personalized Instagram bios using AI",
      date: "Coming Q3 2025",
      icon: "📝",
    },
    {
      name: "AI Comment Assistant",
      description:
        "Generate witty, flirty, or kind comments to engage with your followers or friends",
      date: "Coming Q3 2025",
      icon: "💬",
    },
    {
      name: "Instagram Song Suggestion",
      description:
        "Get AI-recommended songs to match your post vibe, mood, or caption",
      date: "Coming Q2 2025",
      icon: "🎧",
    },
    {
      name: "Aesthetic Filter Recommender",
      description:
        "Suggests the perfect filters based on your post's colors, vibe, or theme",
      date: "Coming Q3 2025",
      icon: "🎨",
    },
    {
      name: "Post Scheduler",
      description: "Schedule your posts for optimal engagement",
      date: "Coming Q3 2025",
      icon: "📅",
    },
    {
      name: "Analytics Dashboard",
      description: "Track your growth and engagement metrics",
      date: "Coming Q4 2025",
      icon: "📊",
    },
    {
      name: "Content Calendar",
      description: "Plan your content strategy effectively",
      date: "Coming Q1 2026",
      icon: "📆",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8 md:mb-12"
        >
          <span className="text-2xl md:text-3xl">🔜</span>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Upcoming Tools
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {upcomingTools.map((tool, index) => (
              <CarouselItem
                key={tool.name}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="p-4 md:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 flex items-center justify-center text-xl md:text-2xl">
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {tool.name}
                        </h3>
                        <p className="text-xs md:text-sm text-pink-600 dark:text-pink-400">
                          {tool.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-0 h-8 w-8 md:h-10 md:w-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800" />
          <CarouselNext className="right-2 md:right-0 h-8 w-8 md:h-10 md:w-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800" />
        </Carousel>
      </div>
    </section>
  )
}
