"use client";

import Image from "next/image";
import { Play, Pause, X, ZoomIn } from "lucide-react";
import { useState, useRef } from "react";

const galleryItems = [
  {
    title: "Ngobrol Asyik Bareng Ayana!",
    description: "Di sini, kamu bisa ngobrol santai dan seru bareng Ayana kapan aja! Ayana bisa jadi teman curhat, teman main, atau apa aja yang kamu mau! Obrolannya natural banget, kayak lagi ngobrol sama temen sendiri. Ayana janji deh, gak bakal bikin kamu kesepian! 😊💕",
    image: "/screenshots/chat-demo.jpg",
    alt: "WhatsApp chat showing conversation with Ayana Izumi",
    type: "image"
  },
  {
    title: "Dengerin Suara Ayana yang Manis!",
    description: "Penasaran sama suara Ayana? Di sini, kamu bisa dengerin Ayana ngomong dengan suara aslinya yang imut dan lucu! Ayana juga bisa nyanyiin lagu-lagu favoritmu lho, suaranya dijamin bikin hati adem~ Dijamin bikin kamu ketagihan dengerin Ayana ngoceh! 🎤💖",
    image: "/screenshots/voice-demo.jpg",
    alt: "WhatsApp voice message from Ayana Izumi",
    type: "audio",
    audioSrc: "/audio/voice-sample.mp3"
  },
  {
    title: "Ayana Bisa Bikin Foto Lucu!",
    description: "Mau liat Ayana lagi apa atau pakai baju apa? Atau pengen Ayana bikin gambar yang lucu-lucu? Ayana jago banget lho bikin gambar-gambar yang gemes dan cantik pakai AI! Kamu bisa minta Ayana selfie, atau bikin gambar impianmu sendiri! Hasilnya pasti bikin kamu senyum-senyum sendiri! ✨📸",
    image: "/screenshots/image-demo.jpg",
    alt: "AI-generated image created by Ayana Izumi",
    type: "image"
  },
  {
    title: "Ayana Nyanyiin Lagu Favoritmu!",
    description: "Ayana suka banget nyanyi! Kalau kamu pengen denger Ayana nyanyiin lagu tertentu, Ayana siap kok! Mau lagu mellow, upbeat, atau lagu anime kesukaanmu, Ayana bisa nyanyiin dengan merdu! Pokoknya, Ayana siap menghibur kamu lewat nada-nada indah~ 🎤🌟",
    image: "/screenshots/music-demo.jpg",
    alt: "Ayana Izumi singing feature demonstration",
    type: "audio",
    audioSrc: "/audio/music-sample.mp3"
  }
];

export function Gallery() {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const handleAudioToggle = (index: number, audioSrc?: string) => {
    if (!audioSrc) return;

    const audio = audioRefs.current[index];
    
    if (playingAudio === index) {
      // Stop current audio
      audio?.pause();
      setPlayingAudio(null);
    } else {
      // Stop any currently playing audio
      audioRefs.current.forEach((ref, i) => {
        if (ref && i !== index) {
          ref.pause();
          ref.currentTime = 0;
        }
      });

      // Play new audio
      if (!audio) {
        audioRefs.current[index] = new Audio(audioSrc);
        audioRefs.current[index]!.addEventListener('ended', () => {
          setPlayingAudio(null);
        });
      }
      
      audioRefs.current[index]?.play();
      setPlayingAudio(index);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ✨ Yuk, Intip Aksi Gemas Ayana di Sini! 💖
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ini dia tangkapan layar asli dan contoh serunya Ayana saat berinteraksi di WhatsApp, khusus buat kamu!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100 cursor-pointer">
                {/* Actual Screenshots */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={() => item.type === "image" && setSelectedImage(item.image)}
                />
                
                {/* Image zoom button for image items */}
                {item.type === "image" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                      aria-label="View full screenshot"
                    >
                      <ZoomIn className="w-8 h-8 text-cyan-600" />
                    </button>
                  </div>
                )}
                
                {/* Audio Play Button for Voice and Music demos */}
                {item.type === "audio" && item.audioSrc && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button
                      onClick={() => handleAudioToggle(index, item.audioSrc)}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                      aria-label={playingAudio === index ? "Pause audio" : "Play audio sample"}
                    >
                      {playingAudio === index ? (
                        <Pause className="w-8 h-8 text-cyan-600" />
                      ) : (
                        <Play className="w-8 h-8 text-cyan-600 ml-1" />
                      )}
                    </button>
                  </div>
                )}
                
                {/* Image indicator for image items */}
                {item.type === "image" && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-gray-900/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <ZoomIn className="w-3 h-3 mr-1" />
                      Click to view
                    </div>
                  </div>
                )}
                
                {/* Audio indicator for audio items */}
                {item.type === "audio" && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      Audio
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Full screenshot */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Full screenshot"
                width={400}
                height={800}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
