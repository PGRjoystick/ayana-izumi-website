import { LucideIcon, MessageCircle, MessageCircleMoreIcon, Heart, Send, MessageCircleHeart } from "lucide-react";

type SocialLink = {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  color: string;
  bgColor: string;
  badge?: string;
};

const socialLinks: SocialLink[] = [
  {
    icon: MessageCircleHeart,
    name: "Web App Ayana",
    description: "Chat Ayana langsung dari browser HP atau laptop, tanpa install! 🌐",
    href: "https://app-ayana.izumi.id",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-800/30",
    badge: "BARU"
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Chat Ayana di WhatsApp",
    href: "https://chat-ayana.izumi.id",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-800/30"
  },
  {
    icon: Send,
    name: "Telegram",
    description: "Chat Ayana di Telegram",
    href: "https://t.me/AyanaIzumi_bot",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/20 dark:hover:bg-sky-800/30"
  },
  {
    icon: MessageCircleMoreIcon,
    name: "Group Chat Ayana dan LSE",
    description: "Bergabung dengan Grup Chat Ayana di Komunitas LSE WhatsApp",
    href: "https://gc.izumi.id",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-800/30"
  },
  {
    icon: Heart,
    name: "💖 Donasi",
    description: "Suka dengan Ayana? Dukung pengembangan Ayana dengan berdonasi disini! 🥹🥰",
    href: "https://trakteer.id/PGRjoystick/",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-800/30"
  }
];

export function SocialLinks() {
  return (
    <section id="social" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Yuk, Ngobrol Bareng Ayana!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Udah siap buat seru-seruan bareng Ayana? Sekarang ada Web App Ayana yang baru, tinggal buka browser langsung chat! Atau kalau mau, chat Ayana di WhatsApp dan Telegram juga bisa kok. Mau dapat info update terbaru dan seru-seruan bareng teman-teman yang lain? Gabung aja ke grup chat Ayana ya! Ayana tunggu lho! 😉💖
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 rounded-2xl ${link.bgColor} border transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/50 ${
                  link.badge
                    ? "border-transparent ring-2 ring-indigo-500 dark:ring-indigo-400 shadow-md"
                    : "border-gray-200 dark:border-gray-700 hover:border-transparent"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2 flex-wrap">
                      {link.name}
                      {link.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-wide">
                          {link.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
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
