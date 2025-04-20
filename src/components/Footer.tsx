import { motion } from "framer-motion"
import { Instagram, Mail, Linkedin, Twitter } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Instagram className="w-7 h-7 text-pink-600 dark:text-pink-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ai4insta.xyz
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Enhance your Instagram content with AI-powered tools and expert
              insights.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: [
                { name: "Features", path: "/features" },
                { name: "Pricing", path: "/pricing" },
                { name: "API", path: "/api" },
              ],
            },
            {
              title: "Help",
              links: [
                { name: "Documentation", path: "/docs" },
                { name: "Guides", path: "/guides" },
                { name: "Support", path: "/support" },
              ],
            },
            {
              title: "Connect",
              links: [
                { name: "Contact Us", path: "/contact" },
                { name: "Blog", path: "/blog" },
                { name: "Newsletter", path: "/newsletter" },
              ],
            },
          ].map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <p>© {currentYear} ai4insta.xyz - All rights reserved</p>
            <span className="hidden md:inline">•</span>
            <p>
              Built with ❤️ by{" "}
              <a
                href="https://instagram.com/therahulkumar9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                Rahul Kumar
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-400 dark:text-gray-600">
              <a
                href="https://x.com/ai4insta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ai4insta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ai4insta.xyz@gmail.com"
                className="hover:text-pink-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ai4insta.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
