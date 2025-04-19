import { Upload, Sliders, Sparkles } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      title: "Upload Your Photo",
      description: "Start by uploading the photo you want to post on Instagram",
    },
    {
      icon: <Sliders className="h-8 w-8 text-purple-600" />,
      title: "Customize Options",
      description:
        "Choose your preferred language, tone, and add hashtags or emojis",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: "Generate Captions",
      description: "Get multiple AI-generated captions tailored to your image",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-gray-800/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          How InstaCaptionAI Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
