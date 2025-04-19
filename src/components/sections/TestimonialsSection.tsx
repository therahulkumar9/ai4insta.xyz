import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      text: "AI4Insta has transformed how I create captions for my posts. It's a game-changer!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Mike Williams",
      role: "Social Media Manager",
      text: "The caption generation tool saves me hours of work every week. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Emily Davis",
      role: "Influencer",
      text: "Finally, a tool that understands Instagram content creation. Love using AI4Insta!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "John Smith",
      role: "Digital Marketer",
      text: "The AI tools have helped me increase engagement by 200%. Amazing results!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8 md:mb-12"
        >
          <span className="text-xl md:text-2xl">⭐</span>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
            What Our Users Say
          </h2>
        </motion.div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="p-4 md:p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                    <p className="mb-6 text-gray-600 dark:text-gray-400 italic text-sm md:text-base">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-0 h-8 w-8 md:h-10 md:w-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800" />
          <CarouselNext className="right-2 md:right-0 h-8 w-8 md:h-10 md:w-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800" />
        </Carousel>
      </div>
    </section>
  );
};
