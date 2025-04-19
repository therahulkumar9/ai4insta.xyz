import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"
const navItems = [
  { name: "Try It Free →", href: "featured-tool", emoji: "✨" },
  { name: "Features", href: "features", emoji: "⚡" },
  { name: "Tools", href: "tools", emoji: "🛠️" },
  { name: "Upcoming Tools", href: "upcoming-tools", emoji: "🔜" },
  { name: "How It Works", href: "how-it-works", emoji: "📝" },
  { name: "Pricing", href: "pricing", emoji: "💰" },
  { name: "Contact", href: "contact", emoji: "📞" },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleScroll = (elementId: string) => {
    setIsOpen(false)
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScrollCheck = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScrollCheck)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScrollCheck)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">📸</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <a href="/">ai4insta.xyz</a>
            </span>
          </motion.button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="flex items-center gap-1.5 text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">{item.emoji}</span>
                <a href={`/#${item.name.toLocaleLowerCase()}`}>
                  <span className="font-medium">{item.name}</span>
                </a>
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
              {navItems.map((item) => (
                <a href={`/#${item.href}`}>
                <motion.button
                  key={item.name}
                  onClick={() => handleScroll(item.href)}
                  className="flex items-center gap-2 w-full p-3 text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <span>{item.emoji}</span>
                    <span className="font-medium">{item.name}</span>
                </motion.button>
                  </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
