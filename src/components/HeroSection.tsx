
import { Button } from "./ui/button";
import { Navigation } from "./Navigation";

export const HeroSection = () => {
  const handleGetStarted = () => {
    const element = document.getElementById('featured-tool');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative md:min-h-[90vh] min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
      <Navigation />
      
      <div className="w-full mt-[-50px] max-w-4xl mx-auto text-center space-y-6 md:space-y-8 pt-16 md:pt-20 px-4">
        <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl">📸</span>
          <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 text-transparent bg-clip-text">
            ai4insta.xyz
          </h1>
        </div>
        
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Your all-in-one AI website for Instagram reach, style, and success.
        </h2>
        
        <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        AI4Insta generates captions, hashtags, bios, and more — just post it! Create viral-ready content in seconds with AI.       </p>

        <Button 
          onClick={handleGetStarted}
          size="lg"
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all text-white text-xs sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 md:py-6 rounded-full shadow-lg hover:shadow-xl dark:from-purple-500 dark:to-pink-500"
        >
          Start generating captions instantly — no signup required! →
        </Button>
      </div>
    </div>
  );
};
