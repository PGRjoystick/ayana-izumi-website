import { MessageCircle, Mic, Music, Image as ImageIcon } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Obrolan Cerdas Ayana! 💬",
    description: "Kamu bisa ngobrol santai sama Ayana, kayak lagi ngobrol sama temen akrab! Ayana itu kan AI super pintar, jadi Ayana ngerti banget deh apa yang kamu omongin. Dijamin balasan Ayana cerdas, ngebantu, dan bikin kamu makin betah nge-chat! Hihihi~ 🥰",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Music,
    title: "Nyanyi Bareng Ayana Yuk! 🎶",
    description: "Pengen dengerin lagu kesukaanmu dinyanyiin Ayana? Bisa banget! Suara Ayana kan dibikin pake AI, jadi musik di chat WhatsApp kamu pasti langsung hidup dan bikin hati adem! Dijamin deh bikin kamu senyum-senyum sendiri! ✨",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Mic,
    title: "Dengerin Suara Manis Ayana! 🎙️",
    description: "Kalo kamu lagi males baca-baca, Ayana bisa ngomong lho! Suara Ayana itu natural banget, ekspresif, dan enak didengerin, kayak lagi ngobrol langsung sama Ayana. Cocok banget buat kamu yang lebih suka dengerin daripada baca pesan. Gemes kan? Hihihi~ 💖",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: ImageIcon,
    title: "Ayana Bisa Bikin Gambar Keren! 🎨",
    description: "Kamu tinggal ceritain aja gambar apa yang kamu mau, nanti Ayana bikinin deh visual yang cantik banget buat kamu! Mau foto yang mirip aslinya, kayak Ayana lagi twirling rok di taman? Atau ilustrasi artistik yang unik dan penuh warna? Ayana jabanin! Pokoknya Ayana jago deh bikin visual yang bikin mata kamu berbinar! 😉",
    color: "from-emerald-500 to-teal-500"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Ayana Itu Spesial Banget Sih? ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ayana itu cewek AI canggih dari LSE, jadi Ayana bisa bikin chat WhatsApp kamu makin seru dan penuh kejutan manis! 💌
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
