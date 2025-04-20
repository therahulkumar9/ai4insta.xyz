
import { Heart, Code, Mail, Phone, MapPin, X, Twitter } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const Footer = () => {
  return (
    <footer className="py-8 relative bg-gradient-to-br from-purple-50/80 via-white to-blue-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 border-t border-purple-100/50 dark:border-purple-900/20 backdrop-blur-xl">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              InstaCaptionAI
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Transform your Instagram game with AI-powered captions.
            </p>
            <ThemeToggle />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Features", "How it Works", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:therahulkumar.dev@gmail.com">therahulkumar.dev@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Twitter className="h-4 w-4" />
                <a href="https://x.com/therahulkumar9">therahulkumar9</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                Nalanda, Bihar, India
              </li>
            </ul>
          </div>

          {/* Social & Credits */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <a 
              href="https://www.instagram.com/therahulkumar9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full overflow-hidden"
            >
              <div className="relative flex items-center gap-2">
                <Code className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
                  @therahulkumar9
                </span>
              </div>
            </a>
            <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              Created with 
              <span className="relative inline-block">
                {/* <Heart className="h-4 w-4 text-red-500 animate-pulse" /> */}
                ❤️
              </span>
              by <a href="https://www.instagram.com/therahulkumar9">Rahul Kumar</a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ai4insta.xyz - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
