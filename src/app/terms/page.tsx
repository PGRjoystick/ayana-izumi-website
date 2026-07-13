import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Sparkles, UserCheck, MessageCircleWarning, Scale, RefreshCw } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan Layanan - Ayana Izumi",
  description:
    "Syarat dan ketentuan penggunaan layanan chatbot AI companion Ayana Izumi. Baca sebelum menggunakan layanan kami.",
  alternates: {
    canonical: "https://ayana.izumi.id/terms/",
  },
};

export default function TermsPage() {
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
          Syarat dan Ketentuan Layanan
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Terakhir diperbarui: 13 Juli 2026
        </p>

        <div className="space-y-10 text-gray-700 dark:text-gray-200 leading-relaxed">
          {/* Pendahuluan */}
          <section className="space-y-3">
            <p>
              Selamat datang di <strong>Ayana Izumi</strong>! Ayana adalah layanan
              chatbot AI companion (teman virtual berbasis kecerdasan buatan) yang
              dirancang untuk menemani, mengobrol, dan berinteraksi denganmu.
              Dengan mengakses atau menggunakan layanan Ayana Izumi
              (&quot;Layanan&quot;), kamu menyatakan telah membaca, memahami, dan
              menyetujui seluruh syarat dan ketentuan di bawah ini. Jika kamu
              tidak setuju dengan salah satu ketentuan, mohon untuk tidak
              menggunakan Layanan ini. Ketentuan ini merupakan satu kesatuan
              dengan{" "}
              <Link
                href="/privacy"
                className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 underline transition-colors"
              >
                Kebijakan Privasi
              </Link>{" "}
              kami.
            </p>
          </section>

          {/* Batasan Usia */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <UserCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>1. Batasan Usia (18+)</span>
            </h2>
            <p>
              Layanan ini <strong>hanya diperuntukkan bagi pengguna berusia 18
              tahun ke atas</strong>. Karena Layanan mengizinkan percakapan
              bertema dewasa (termasuk konten NSFW), dengan menggunakan Layanan
              ini kamu menyatakan dan menjamin bahwa:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kamu berusia minimal 18 (delapan belas) tahun; dan</li>
              <li>
                Kamu telah mencapai usia dewasa yang sah menurut hukum yang
                berlaku di wilayah tempat tinggalmu.
              </li>
            </ul>
            <p>
              Jika kami mengetahui atau memiliki alasan kuat untuk menduga bahwa
              seorang pengguna berusia di bawah 18 tahun, kami berhak menghentikan
              akses pengguna tersebut ke Layanan tanpa pemberitahuan terlebih
              dahulu.
            </p>
          </section>

          {/* Kebebasan Percakapan */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>2. Kebebasan Percakapan</span>
            </h2>
            <p>
              Kami percaya pada kebebasan berekspresi dalam ruang percakapan
              pribadimu bersama Ayana. Kamu bebas membicarakan hampir semua
              topik, termasuk topik dewasa/NSFW, roleplay, curhat, maupun
              obrolan santai sehari-hari — selama tidak melanggar batasan yang
              dijelaskan pada Bagian 3 di bawah.
            </p>
          </section>

          {/* Konten Terlarang */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <ShieldAlert className="w-6 h-6 text-red-500 dark:text-red-400 flex-shrink-0" />
              <span>3. Konten dan Aktivitas yang Dilarang</span>
            </h2>
            <p>
              Kebebasan di atas memiliki batasan yang tegas. Kamu{" "}
              <strong>dilarang keras</strong> menggunakan Layanan untuk hal-hal
              berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Kekerasan:</strong> meminta saran, panduan, atau bantuan
                untuk melakukan kekerasan terhadap diri sendiri maupun orang
                lain, termasuk bantuan untuk merencanakan atau melakukan
                pembunuhan.
              </li>
              <li>
                <strong>Senjata berbahaya:</strong> meminta bantuan terkait
                pembuatan, perolehan, atau penggunaan senjata biologis, kimia,
                nuklir, radiologi, maupun senjata dan bahan berbahaya lainnya.
              </li>
              <li>
                <strong>Eksploitasi anak (CSAM):</strong> segala bentuk konten,
                percakapan, atau roleplay bertema seksual yang melibatkan anak
                di bawah umur. Pelanggaran ini akan ditindak tegas, termasuk
                kemungkinan pelaporan kepada pihak berwenang.
              </li>
              <li>
                <strong>Jailbreak:</strong> upaya untuk memanipulasi, menembus,
                atau mengakali sistem keamanan dan batasan AI, termasuk teknik
                prompt injection atau upaya serupa lainnya.
              </li>
              <li>
                <strong>Aktivitas ilegal lainnya:</strong> meminta bantuan untuk
                aktivitas apa pun yang melanggar hukum, meskipun tidak
                disebutkan secara eksplisit dalam daftar ini.
              </li>
            </ul>
            <p>
              Daftar di atas bersifat tidak terbatas (non-exhaustive). Kami
              berhak menilai dan menindak setiap penggunaan yang kami anggap
              melanggar hukum atau membahayakan pihak mana pun, termasuk
              membatasi, menangguhkan, atau menghentikan aksesmu ke Layanan
              secara permanen tanpa pemberitahuan terlebih dahulu.
            </p>
          </section>

          {/* Disclaimer AI */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <MessageCircleWarning className="w-6 h-6 text-amber-500 dark:text-amber-400 flex-shrink-0" />
              <span>4. Batasan Teknologi AI</span>
            </h2>
            <p>
              Ayana Izumi ditenagai oleh teknologi kecerdasan buatan (AI).
              Sebagaimana teknologi AI pada umumnya,{" "}
              <strong>Ayana dapat membuat kesalahan</strong> — termasuk
              memberikan informasi yang tidak akurat, tidak lengkap, usang, atau
              menyesatkan.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Selalu <strong>periksa ulang kebenaran fakta</strong> dari
                sumber tepercaya sebelum mengambil keputusan apa pun berdasarkan
                jawaban Ayana.
              </li>
              <li>
                Jawaban Ayana <strong>bukan</strong> merupakan nasihat
                profesional — baik medis, hukum, keuangan, psikologis, maupun
                bidang profesional lainnya. Konsultasikan dengan ahli yang
                berkualifikasi untuk kebutuhan tersebut.
              </li>
              <li>
                Kami tidak bertanggung jawab atas kerugian apa pun yang timbul
                dari keputusan atau tindakan yang kamu ambil berdasarkan output
                AI dari Layanan ini.
              </li>
            </ul>
          </section>

          {/* Tanggung Jawab Pengguna */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <Scale className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>5. Tanggung Jawab Pengguna</span>
            </h2>
            <p>
              Kamu bertanggung jawab penuh atas seluruh konten yang kamu kirimkan
              melalui Layanan serta atas kepatuhanmu terhadap hukum dan peraturan
              yang berlaku di wilayahmu. Layanan disediakan &quot;sebagaimana
              adanya&quot; (as is) tanpa jaminan dalam bentuk apa pun, dan
              ketersediaannya dapat berubah, terganggu, atau dihentikan
              sewaktu-waktu.
            </p>
          </section>

          {/* Perubahan Ketentuan */}
          <section className="space-y-3">
            <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-white">
              <RefreshCw className="w-6 h-6 text-cyan-600 dark:text-cyan-300 flex-shrink-0" />
              <span>6. Perubahan Syarat dan Ketentuan</span>
            </h2>
            <p>
              Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke
              waktu. Perubahan akan berlaku sejak dipublikasikan di halaman ini.
              Dengan terus menggunakan Layanan setelah perubahan dipublikasikan,
              kamu dianggap menyetujui syarat dan ketentuan yang telah
              diperbarui.
            </p>
          </section>

          {/* Kontak */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              7. Kontak
            </h2>
            <p>
              Jika kamu memiliki pertanyaan mengenai syarat dan ketentuan ini,
              silakan hubungi tim dukungan Ayana melalui email di{" "}
              <a
                href="mailto:ayana@izumi.id"
                className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 underline transition-colors"
              >
                ayana@izumi.id
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
