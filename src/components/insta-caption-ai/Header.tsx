
import { Camera, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 bg-gradient-to-r from-purple-50/80 via-white to-blue-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 border-b border-purple-100/50 dark:border-purple-900/20 backdrop-blur-xl sticky top-0 z-50">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-full p-2 transition-transform duration-300 group-hover:scale-110">
                <Camera className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 group-hover:animate-pulse transition duration-300">
                InstaCaptionAI
              </h1>
              <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
