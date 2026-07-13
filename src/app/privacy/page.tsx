import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Database, ScanEye, BrainCircuit, SlidersHorizontal, ImagePlus, Music, Crown, RefreshCw } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Ayana Izumi",
  description:
    "Kebijakan privasi layanan chatbot AI companion Ayana Izumi. Pelajari bagaimana data dan percakapanmu diproses.",
  alternates: {
    canonical: "https://ayana.izumi.id/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent mb-4">
          Kebijakan Privasi
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Terakhir diperbarui: 13 Juli 2026
        </p>

        <div className="space-y-10 text-gray-700 dark:text-gray-200 leading-relaxed">
          {/* Pendahuluan */}
          <section className="space-y-3">
            <p>
              Privasimu penting bagi kami. Kebijakan privasi ini menjelaskan
              bagaimana <strong>Ayana Izumi</strong> (&quot;kami&quot;)
              mengumpulkan, menyimpan, memproses, dan meneruskan data yang kamu
              kirimkan saat menggunakan layanan chatbot AI companion kami
              (&quot;Layanan&quot;). Dengan menggunakan Layanan, kamu dianggap
              telah membaca dan menyetujui kebijakan privasi ini. Kebijakan ini
              merupakan satu kesatuan dengan{" "}
              <Link
                href="/terms"
                className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 underline transition-colors"
              >
                Syarat dan Ketentuan Layanan
              </Link>{" "}
              kami.
            </p>
          </section>

          {/* Data yang Kami Proses */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <Database className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>1. Data yang Kami Simpan dan Proses</span>
            </h2>
            <p>
              Di sisi kami, peran kami sederhana:{" "}
              <strong>
                kami hanya menyimpan dan memproses prompt (pesan) serta media
                yang kamu kirimkan untuk diteruskan kepada penyedia layanan AI
                (AI provider)
              </strong>{" "}
              yang kamu pilih. Pemrosesan ini diperlukan agar Ayana dapat
              memahami dan membalas pesanmu, termasuk menjaga konteks
              percakapan agar obrolan terasa berkesinambungan.
            </p>
            <p>
              Kami tidak menjual data pribadimu kepada pihak ketiga mana pun,
              dan kami tidak membagikan percakapanmu kepada pihak lain di luar
              penyedia layanan AI yang diperlukan untuk menjalankan Layanan.
            </p>
          </section>

          {/* Pemindaian Konten */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <ScanEye className="w-6 h-6 text-amber-500 dark:text-amber-400 flex-shrink-0" />
              <span>2. Pemindaian Konten untuk Pelanggaran</span>
            </h2>
            <p>
              Harap dipahami bahwa{" "}
              <strong>
                pesan (prompt) yang kamu kirimkan dapat dipindai atau diperiksa
                untuk mendeteksi pelanggaran
              </strong>{" "}
              terhadap ketentuan Layanan — misalnya konten yang berkaitan dengan
              kekerasan, senjata berbahaya, eksploitasi anak (CSAM), upaya
              jailbreak, atau aktivitas ilegal lainnya sebagaimana dijelaskan
              dalam Syarat dan Ketentuan Layanan. Pemindaian ini dapat dilakukan
              oleh sistem kami maupun oleh penyedia layanan AI. Jangan
              menganggap percakapanmu sepenuhnya privat dari sistem moderasi
              otomatis.
            </p>
          </section>

          {/* Penggunaan untuk Training */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <BrainCircuit className="w-6 h-6 text-amber-500 dark:text-amber-400 flex-shrink-0" />
              <span>3. Penggunaan Data oleh Penyedia AI (Termasuk Training)</span>
            </h2>
            <p>
              Karena pesanmu diteruskan kepada penyedia layanan AI pihak ketiga,{" "}
              <strong>
                pesan dan media yang kamu kirimkan dapat digunakan oleh penyedia
                AI tersebut untuk melatih (training) model AI mereka
              </strong>
              , sesuai dengan kebijakan masing-masing penyedia.
            </p>
            <p>
              Setiap penyedia AI memiliki kebijakan privasi yang{" "}
              <strong>berbeda-beda</strong> — ada yang menggunakan data untuk
              training, ada yang tidak; ada yang menyimpan data dalam jangka
              waktu tertentu, ada yang segera menghapusnya. Kami tidak
              mengendalikan dan tidak bertanggung jawab atas praktik privasi
              masing-masing penyedia AI. Kami sangat menyarankan kamu membaca
              kebijakan privasi dari penyedia AI yang kamu gunakan.
            </p>
          </section>

          {/* Pilihan Penyedia AI */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <SlidersHorizontal className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>4. Kamu yang Memilih Penyedia AI</span>
            </h2>
            <p>
              Justru karena setiap penyedia AI memiliki kebijakan privasi yang
              berbeda, kami memberikan{" "}
              <strong>
                opsi kepadamu untuk memilih sendiri model LLM dan layanan AI
              </strong>{" "}
              yang ingin kamu gunakan saat mengobrol dengan Ayana. Dengan begitu,
              kamu dapat menyesuaikan pilihanmu dengan tingkat privasi yang kamu
              rasa nyaman — misalnya memilih penyedia yang tidak menggunakan data
              untuk training jika itu penting bagimu.
            </p>
          </section>

          {/* Pembuatan dan Pengeditan Gambar */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <ImagePlus className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>5. Pembuatan dan Pengeditan Gambar</span>
            </h2>
            <p>
              Fitur pembuatan gambar Ayana menggunakan{" "}
              <strong>inferensi AI lokal</strong> di server kami sendiri
              (memanfaatkan ComfyUI dan Stable Diffusion). Selama kamu
              menggunakan <strong>tool manual di web Ayana</strong> atau{" "}
              <strong>perintah teks manual</strong>, seluruh proses pembuatan
              gambar berlangsung sepenuhnya di server kami — tidak ada data yang
              dikirim ke pihak ketiga — dan hasil gambarnya bersifat{" "}
              <strong>ephemeral</strong> (sementara, tidak disimpan secara
              permanen).
            </p>
            <p>
              Namun, jika kamu <strong>meminta Ayana secara langsung</strong> di
              dalam chat untuk membuatkan gambar, permintaanmu beserta hasil
              gambarnya harus kami teruskan kepada penyedia layanan AI yang kamu
              gunakan agar ayana dapat menanggapi gambar yang dia buat.
              Dalam kasus ini, kebijakan privasi yang berlaku adalah
              kebijakan privasi penyedia AI tersebut (lihat Bagian 3).
            </p>
            <p>
              Untuk fitur <strong>pengeditan gambar</strong>, pemrosesan
              dilakukan menggunakan model{" "}
              <strong>Google Nano Banana 2</strong> melalui platform{" "}
              <strong>Google Cloud Vertex AI</strong> (dengan kunci API
              berbayar). Oleh karena itu, data yang diproses dalam pengeditan
              gambar tunduk pada kebijakan privasi Google Cloud Vertex AI.
            </p>
            <p>
              Perlu dicatat:{" "}
              <strong>
                seluruh hasil gambar dimoderasi, termasuk yang dibuat melalui
                tool manual
              </strong>
              , untuk memastikan tidak ada pelanggaran terhadap Syarat dan
              Ketentuan Layanan.
            </p>
          </section>

          {/* Fitur Suara */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <Music className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>6. Fitur Suara: Menyanyi dan Text-to-Speech (TTS)</span>
            </h2>
            <p>
              Fitur <strong>menyanyi</strong> Ayana diproses{" "}
              <strong>sepenuhnya secara lokal</strong> di server kami, tanpa
              melibatkan pihak ketiga.
            </p>
            <p>
              Pengecualiannya adalah bagian <strong>text-to-speech (TTS)</strong>{" "}
              — yaitu saat kamu meminta Ayana mengucapkan sesuatu. Untuk bagian
              ini, kami menggunakan layanan{" "}
              <strong>Google Gemini TTS dengan kunci API gratis (free tier
              Google AI Studio)</strong>, lalu hasil audionya kami konversi di
              server kami sendiri agar sesuai dengan suara karakter Ayana.
            </p>
            <p>
              Karena menggunakan free tier Google AI Studio, teks yang dikirim
              untuk TTS tunduk pada kebijakan privasi free tier Google AI
              Studio, di mana{" "}
              <strong>
                Google menggunakan data tersebut untuk melatih model AI mereka
              </strong>
              . Mohon pertimbangkan hal ini sebelum menggunakan fitur TTS.
            </p>
          </section>

          {/* Ayana Pro */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <Crown className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>7. Pengguna Gratis dan Ayana Pro</span>
            </h2>
            <p>
              Layanan berbayar kami, <strong>Ayana Pro</strong>, hanya
              memberikan limit penggunaan yang lebih besar serta akses ke
              fitur-fitur baru.{" "}
              <strong>
                Dari sisi privasi, tidak ada perbedaan apa pun antara pengguna
                gratis dan pengguna Ayana Pro
              </strong>{" "}
              — data keduanya disimpan, diproses, dan diteruskan kepada penyedia
              AI dengan cara yang sama persis sebagaimana dijelaskan dalam
              kebijakan ini.
            </p>
          </section>

          {/* Perubahan Kebijakan */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <RefreshCw className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>8. Perubahan Kebijakan Privasi</span>
            </h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu,
              misalnya jika ada perubahan pada cara kami memproses data atau
              pada penyedia AI yang kami dukung. Perubahan akan berlaku sejak
              dipublikasikan di halaman ini. Dengan terus menggunakan Layanan
              setelah perubahan dipublikasikan, kamu dianggap menyetujui
              kebijakan privasi yang telah diperbarui.
            </p>
          </section>

          {/* Kontak */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              9. Kontak
            </h2>
            <p>
              Jika kamu memiliki pertanyaan mengenai kebijakan privasi ini,
              silakan hubungi kami melalui tautan yang tersedia di{" "}
              <Link
                href="/#social"
                className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 underline transition-colors"
              >
                halaman utama
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
