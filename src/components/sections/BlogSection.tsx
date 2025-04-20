
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export const BlogSection = () => {
  const posts = [
    {
      title: "10 Tips for Better Instagram Captions",
      excerpt: "Learn how to write engaging captions that boost your engagement.",
      date: "April 15, 2025",
      readTime: "5 min read",
      category: "Content Writing"
    },
    {
      title: "Maximizing Instagram Engagement",
      excerpt: "Discover strategies to increase your posts' reach and engagement.",
      date: "April 12, 2025",
      readTime: "4 min read",
      category: "Growth Strategy"
    },
    {
      title: "AI Tools for Content Creators",
      excerpt: "Explore how AI can enhance your content creation workflow.",
      date: "April 10, 2025",
      readTime: "6 min read",
      category: "Technology"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* <MessageSquare className="w-8 h-8 text-pink-600 dark:text-pink-400" /> */}
          <span className="text-3xl md:text-4xl">💡</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
              Tips & Tricks
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the latest strategies and insights to enhance your Instagram presence
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-pink-600 dark:text-pink-400 hover:text-pink-700 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                  >
                    Read More →
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
