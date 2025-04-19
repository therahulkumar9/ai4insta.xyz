
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Have questions about AI4Insta? Want to share feedback or report an issue? We'd love to hear from you!
                </p>
                <div className="space-y-4 mt-6">
                  <a
                    href="mailto:therahulkumar.dev@gmail.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                  >
                    <span className="text-xl">📧</span>
                    <span>therahulkumar.dev@gmail.com</span>
                  </a>
                  <a
                    href="https://twitter.com/therahulkumar9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                  >
                    <span className="text-xl">🐦</span>
                    <span>@therahulkumar9</span>
                  </a>
                  <a
                    href="https://instagram.com/therahulkumar9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                  >
                    <span className="text-xl">📸</span>
                    <span>@therahulkumar9</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/therahulkumar9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                  >
                    <span className="text-xl">💼</span>
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6">Quick Support</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                For faster support, reach out on Twitter or send us an email. We typically respond within 24 hours.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-[#1DA1F2] hover:bg-[#1A8CD8]">
                  <span className="mr-2">🐦</span>
                  DM on Twitter
                </Button>
                <Button variant="outline" className="w-full">
                  <span className="mr-2">💬</span>
                  Send us a Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
