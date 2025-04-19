
import { useState, useCallback } from "react";
import { UploadCloud, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  imagePreview: string | null;
}

const ImageUploader = ({ onImageUpload, imagePreview }: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = useCallback((file: File) => {
    if (file && file.type.startsWith("image/")) {
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleImageChange(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("image-upload")?.click();
  };

  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "bg-gradient-to-br from-purple-50/90 to-white dark:from-gray-900/90 dark:to-gray-800/90",
        "backdrop-blur-xl border-2",
        isDragging ? "border-purple-400 scale-102" : "border-gray-200 dark:border-gray-700",
        "rounded-xl shadow-xl hover:shadow-2xl"
      )}
    >
      <div
        className={cn(
          "p-6 transition-all duration-300",
          imagePreview ? "min-h-[300px]" : "min-h-[250px]"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <div className="relative group cursor-pointer" onClick={triggerFileInput}>
            <img 
              src={imagePreview} 
              alt="Preview"
              className="w-full h-[250px] object-contain rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 backdrop-blur-md">
                <ImageIcon className="mr-2 h-4 w-4" />
                Change Image
              </Button>
            </div>
          </div>
        ) : (
          <div
            className="h-full flex flex-col items-center justify-center cursor-pointer"
            onClick={triggerFileInput}
          >
            <UploadCloud className="h-16 w-16 text-purple-400 mb-4 animate-bounce" />
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Upload your photo
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Drag and drop or click to browse
            </p>
          </div>
        )}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          key={imagePreview || 'no-image'} // Reset input when image changes
        />
      </div>
    </Card>
  );
};

export default ImageUploader;
