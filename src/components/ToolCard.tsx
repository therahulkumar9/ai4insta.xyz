
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ToolCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const ToolCard = ({ title, description, icon }: ToolCardProps) => {
  return (
    <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-500/20 group dark:bg-gray-800/50 dark:border-gray-700 dark:hover:border-pink-500/20 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};
