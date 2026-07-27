import Image from "next/image";

const PUBLICATIONS = [
  {
    type: "Jurnal Internasional",
    title: "Step-to-Focus Prediction in Robotic Microscopy: A Comparative Study of RNN, LSTM, GRU, and CNN1D Architectures",
    publisher: "JOIV: International Journal on Informatics Visualization (Vol. 10, No. 3, 2026)",
    doi: "10.62527/joiv.10.3.4523",
    link: "https://www.joiv.org/index.php/joiv/article/view/4523",
    badge: "JOIV Journal 2026",
  },
  {
    type: "Konferensi Internasional IEEE",
    title: "Multi-Class Focus Level Classification for Robotic Microscope Using Image Metrics and Machine Learning",
    publisher: "2025 International Electronics Symposium (IES) — IEEE Xplore",
    doi: "10.1109/IES67184.2025.11161434",
    link: "https://ieeexplore.ieee.org/abstract/document/11161434",
    badge: "IEEE Xplore 2025",
  },
  {
    type: "Jurnal Pengabdian & IoT",
    title: "Implementasi Kalibrasi Otomatis pada Water Quality Meter untuk Pembelajaran Monitoring Kualitas Air",
    publisher: "Jurnal Pengabdian Masyarakat (JPM) UTDI (Vol. 5, No. 1, 2026)",
    doi: "10.26798/jpm.v5i1.2341",
    link: "https://ejournal.utdi.ac.id/index.php/JPM/article/view/2341",
    badge: "JPM UTDI 2026",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="py-24 bg-slate-900/50 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* PART 1: Profil Perusahaan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Tentang Kami & Landasan Riset
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Badan hukum kecil,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
                jangkauan rekayasa penuh.
              </span>
            </h2>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Badan Hukum Resmi (UU Cipta Kerja)</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-2xl font-bold text-blue-400">End-to-End</div>
                <div className="text-xs text-slate-400 mt-1">AI Model + Hardware + GUI</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
              <strong className="text-white">PT Visi Rekayasa Nusantara</strong> adalah PT Perorangan yang bergerak di bidang kecerdasan buatan, Internet of Things, dan desain sistem elektronik — berdiri sebagai badan hukum penuh dengan perlindungan tanggung jawab terbatas di bawah UU Cipta Kerja.
            </p>
            <p className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
              Kami bekerja pada lapisan yang sering terlewat oleh studio AI kebanyakan: bukan cuma model yang akurat di atas kertas, tapi sistem yang benar-benar berjalan di perangkat nyata — dari kamera, papan sirkuit custom, hingga antarmuka yang dipakai pengguna akhir.
            </p>
            <p className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/80">
              Portofolio kami sejauh ini berfokus pada pencitraan medis dan diagnostik berbasis visi komputer, dengan latar belakang riset di bidang autofocus mikroskopi robotik dan klasifikasi citra berbasis CNN &amp; Vision Transformer.
            </p>
          </div>
        </div>

        {/* PART 2: Profil Founder & Rekam Publikasi Ilmiah */}
        <div className="pt-12 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sisi Kiri: Profil Founder & Pendidikan */}
          <div className="lg:col-span-5 space-y-6 bg-slate-950/90 p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="flex items-center gap-4">
              <Image
                src="/irfan.png"
                alt="Muhammad Irfan Tam Tomo"
                width={120}
                height={120}
                className="w-24 h-24 rounded-2xl object-cover border-2 border-cyan-400/60 shadow-xl shadow-cyan-500/25 shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Muhammad Irfan Tam Tomo</h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  Founder & Lead Engineer — PT Visi Rekayasa Nusantara
                </p>
              </div>
            </div>

            {/* Riwayat Pendidikan Resmi */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-2.5 text-xs font-mono">
              <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold text-cyan-400 mb-1">
                Latar Belakang Akademik
              </div>
              <div className="flex items-start gap-2.5 text-slate-200">
                <span className="text-cyan-400 font-bold shrink-0">🎓 S2 Terapan:</span>
                <span>Teknik Elektro — Politeknik Elektronika Negeri Surabaya (PENS)</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-200">
                <span className="text-cyan-400 font-bold shrink-0">🎓 D4:</span>
                <span>Teknik Elektromedis — Poltekkes Kemenkes Jakarta II</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Spesialisasi dalam perancangan instrumen medis, visi komputer, dan sistem cerdas terintegrasi. Aktif mempublikasikan riset mikroskopi robotik (*autofocus prediction*), pemrosesan sinyal & citra medis, hingga otomasi instrumen terintegrasi.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                🏛️ Alumni PENS & Poltekkes Jkt II
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 font-mono">
                IEEE Author
              </span>
            </div>
          </div>

          {/* Sisi Kanan: Daftar 3 Paper Publikasi Ilmiah Asli */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <span>📚</span> Publikasi & Paper Ilmiah Resmi
              </h3>
              <span className="text-xs font-mono text-cyan-400">3 Verified Papers</span>
            </div>

            <div className="space-y-4">
              {PUBLICATIONS.map((pub, idx) => (
                <a
                  key={idx}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/60 hover:bg-slate-950 transition-all group relative"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-semibold">
                      {pub.type}
                    </span>
                    <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                      Lihat Paper ↗
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {pub.title}
                  </h4>

                  <p className="text-xs text-slate-400 mt-2 font-mono">
                    Penerbit: <strong className="text-slate-200">{pub.publisher}</strong>
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>DOI: {pub.doi}</span>
                    <span className="text-cyan-500 font-semibold">{pub.badge}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


