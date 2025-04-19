
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
        <Card className="mb-8">
          <CardContent className="prose dark:prose-invert max-w-none pt-6">
            <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: April 19, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">By accessing and using AI4Insta, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="mb-4">We grant you a personal, non-exclusive, non-transferable license to use AI4Insta for generating Instagram captions. You may not:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy our AI models</li>
                <li>Use the service for any illegal purpose</li>
                <li>Transfer the materials to another person</li>
                <li>Attempt to reverse engineer the software</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="mb-4">The materials on AI4Insta are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="mb-4">In no event shall AI4Insta or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
              <p>Questions about the Terms of Service should be sent to us at:</p>
              <p><a href="mailto:therahulkumar.dev@gmail.com" className="text-pink-600 hover:text-pink-700">therahulkumar.dev@gmail.com</a></p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
