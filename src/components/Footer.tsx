import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
              Ayana Izumi
            </h3>
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
              Teman AI Paling Gemes di WhatsApp! Bikin Chat-mu Makin Seru & Berwarna! 🌈
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Link Cepat</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-cyan-300 transition-colors">
                Fitur
              </a>
              <a href="#gallery" className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-cyan-300 transition-colors">
                Galeri
              </a>
              <a href="#social" className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-cyan-300 transition-colors">
                Connect
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Started</h4>
            <div className="space-y-2">
              <p className="text-gray-400 dark:text-gray-300">
                Siap untuk Chat dengan Ayana?
              </p>
              <a
                href="https://chat-ayana.izumi.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
              >
                Chat Sekarang!
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400 dark:text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by PGRjoystick</span>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Ayana Izumi, Latent Space Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
