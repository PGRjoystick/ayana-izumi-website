import { MessageCircle, Phone, Mail, Globe, Github, Twitter, GroupIcon, MessageCircleMoreIcon } from "lucide-react";

const socialLinks = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Chat Ayana di WhatsApp",
    href: "https://chat-ayana.izumi.id",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 hover:bg-green-100"
  },
  {
    icon: MessageCircleMoreIcon,
    name: "Group Chat Ayana dan LSE",
    description: "Bergabung dengan Grup Chat Ayana di Komunitas LSE WhatsApp",
    href: "https://gc.izumi.id",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 hover:bg-blue-100"
  },
  {
    icon: Globe,
    name: "Website",
    description: "Kunjungi website utama Ayana",
    href: "https://ayana.izumi.id",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 hover:bg-indigo-100"
  }
];

export function SocialLinks() {
  return (
    <section id="social" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Yuk, Ngobrol Bareng Ayana!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Udah siap buat seru-seruan bareng Ayana? Yuk, Chat Ayana sekarang! Kalau mau dapat info update terbaru dan seru-seruan bareng teman-teman yang lain, gabung aja ke grup chat Ayana ya! Ayana tunggu lho! 😉💖
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 rounded-2xl ${link.bgColor} border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
