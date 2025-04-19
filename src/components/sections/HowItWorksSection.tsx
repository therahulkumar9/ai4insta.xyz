
import { motion } from "framer-motion";

export const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Select a Tool",
      description: "Choose from our collection of AI-powered Instagram tools.",
      emoji: "🛠️"
    },
    {
      step: "2",
      title: "Input Your Content",
      description: "Provide the necessary information for the selected tool.",
      emoji: "📝"
    },
    {
      step: "3",
      title: "Get Results",
      description: "Receive AI-generated content ready for your Instagram posts.",
      emoji: "✨"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8 md:mb-12"
        >
          <span className="text-2xl md:text-3xl">🛠️</span>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            How It Works
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 -translate-y-1/2 hidden md:block" /> */}
          
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10"
              >
                {item.emoji}
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
