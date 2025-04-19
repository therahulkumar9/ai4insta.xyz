
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

export const WhySection = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge AI technology to enhance your Instagram content.",
      details: "Our advanced AI algorithms analyze trends and patterns to generate highly engaging content tailored to your audience."
    },
    {
      title: "Time-Saving Tools",
      description: "Streamline your content creation process with our efficient tools.",
      details: "Reduce content creation time by up to 75% with our automated tools and smart suggestions."
    },
    {
      title: "Better Engagement",
      description: "Create more engaging content that resonates with your audience.",
      details: "Our AI tools help you craft content that drives higher engagement rates and follower growth."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <span className="text-2xl">✨</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            Why AI4Insta
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <HoverCard key={item.title}>
              <HoverCardTrigger>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-pink-500/20 dark:hover:border-pink-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl text-pink-600 dark:text-pink-400">✅</span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.details}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};
