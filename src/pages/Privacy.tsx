
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <Card className="mb-8">
          <CardContent className="prose dark:prose-invert max-w-none pt-6">
            <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: April 19, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us when using AI4Insta:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Instagram captions and content you generate</li>
                <li>Images you upload for caption generation</li>
                <li>Email address (if provided for notifications)</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our AI caption generation service</li>
                <li>Personalize your experience</li>
                <li>Send you important updates about our service</li>
                <li>Analyze and improve our AI models</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
              <p>We implement security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p><a href="mailto:therahulkumar.dev@gmail.com" className="text-pink-600 hover:text-pink-700">therahulkumar.dev@gmail.com</a></p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
