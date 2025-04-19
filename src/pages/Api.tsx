
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Api = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">API Documentation</h1>
        {/* Add API documentation content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Api;
