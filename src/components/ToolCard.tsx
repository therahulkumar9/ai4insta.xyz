import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ToolCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  comingSoonDate?: string;  // Optional prop for "Coming Soon" date
}

export const ToolCard = ({ title, description, icon, comingSoonDate }: ToolCardProps) => {
  return (
    <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-300 hover:border-pink-500/20 group dark:bg-gray-800 dark:border-gray-700 dark:hover:border-pink-500/20 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative space-y-6">
        {/* Logo and Coming Soon Date */}
        <div className="flex items-center justify-between space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-700 dark:to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Conditionally render "Coming Soon" if the date is provided */}
          {comingSoonDate && ( <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white dark:bg-gradient-to-r dark:from-yellow-300 dark:via-orange-400 dark:to-red-500 dark:text-gray-800 border rounded-lg px-2 py-1 shadow-md">
            
              <p className="text-sm font-semibold">
                {comingSoonDate}
              </p>
          </div>
            )}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};
