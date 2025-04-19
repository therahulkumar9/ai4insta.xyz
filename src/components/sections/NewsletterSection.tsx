
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50/50 to-orange-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-40 dark:opacity-20">
        <div className="absolute -left-4 -top-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -right-4 -top-4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full items-center justify-center bg-purple-100 dark:bg-purple-900/30">
              <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
              Stay in the Loop
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get weekly insights on AI tools, productivity hacks, and digital innovation delivered straight to your inbox.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 pr-10 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400"
                required
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button 
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-all duration-200 flex items-center gap-2"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </Button>
          </motion.form>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            No spam ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
