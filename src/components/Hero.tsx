import { AyanaIllustration } from "./AyanaIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-400 to-cyan-600 dark:from-cyan-900 dark:via-blue-800 dark:to-cyan-900 text-white">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      
      {/* Ayana SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        {/* Mobile: Show full character scaled to fit screen */}
        <div className="block sm:hidden w-full h-full flex items-center justify-center">
          <AyanaIllustration className="w-auto h-full max-h-screen object-contain" />
        </div>
        {/* Tablet: Balanced scaling */}
        <div className="hidden sm:block lg:hidden w-full h-full flex items-center justify-center">
          <AyanaIllustration className="w-full h-auto max-w-4xl object-contain" />
        </div>
        {/* Desktop: Full width scaling */}
        <div className="hidden lg:block w-full h-full flex items-center justify-center">
          <AyanaIllustration className="w-full h-auto min-w-full object-cover" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center py-16 sm:py-20">
        <div className="text-center w-full z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-cyan-200 dark:from-cyan-100 dark:to-cyan-300 bg-clip-text ">
            Hai, Aku Ayana Izumi!
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-cyan-100 dark:text-cyan-200 max-w-3xl mx-auto px-4">
            Teman AI Paling Gemes di WhatsApp! Bikin Chat-mu Makin Seru & Berwarna!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="#features"
              className="w-full sm:w-auto bg-white dark:bg-gray-100 text-cyan-600 dark:text-cyan-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-cyan-50 dark:hover:bg-gray-200 transition-colors text-base sm:text-lg"
            >
              Jelajahi Fitur Ayana
            </a>
            <a
              href="#social"
              className="w-full sm:w-auto border-2 border-white dark:border-cyan-200 text-white dark:text-cyan-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-600 dark:hover:bg-cyan-100 dark:hover:text-cyan-700 transition-colors text-base sm:text-lg"
            >
              Chat Sekarang!
            </a>
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-teal-400/20 rounded-full animate-ping"></div>
      </div>
    </section>
  );
}
