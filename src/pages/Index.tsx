import { HeroSection } from "@/components/HeroSection";
import { FeaturedToolSection } from "@/components/sections/FeaturedToolSection";
import { UpcomingToolsSection } from "@/components/sections/UpcomingToolsSection";
import { WhySection } from "@/components/sections/WhySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Footer } from "@/components/Footer";
import { ToolsSection } from "@/components/ToolsSection";
import { HomePricingSection } from "@/components/sections/HomePricingSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden">
      <div id="home" className="pt-16 w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <HeroSection />
      </div>
      <div id="featured-tool" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <FeaturedToolSection />
      </div>
      <div id="tools" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <ToolsSection />
      </div>
      <div id="upcoming-tools" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <UpcomingToolsSection />
      </div>
      <div id="features" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <WhySection />
      </div>
      <div id="how-it-works" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <HowItWorksSection />
      </div>
      <div id="pricing" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <HomePricingSection />
      </div>
      <div id="testimonials" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <TestimonialsSection />
      </div>
      <div id="faq" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <FaqSection />
      </div>
      <div id="newsletter" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <NewsletterSection />
      </div>
      <div id="blog" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <BlogSection />
      </div>
      <div id="contact" className="w-full bg-gradient-to-br from-purple-600/5 via-pink-500/5 to-orange-400/5 dark:from-purple-600/10 dark:via-pink-500/10 dark:to-orange-400/10">
        <Footer />
      </div>
      
    </div>
  );
};

export default Index;