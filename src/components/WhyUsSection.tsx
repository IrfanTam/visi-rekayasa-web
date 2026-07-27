export default function WhyUsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white">Mengapa Memilih PT VRN?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
            <div className="text-3xl">📄</div>
            <h3 className="font-bold text-white text-lg">Resmi & Terstruktur</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Setiap transaksi dilengkapi dokumen Invoice dan nomor surat proyek resmi perusahaan.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
            <div className="text-3xl">💎</div>
            <h3 className="font-bold text-white text-lg">Transparansi Rincian Biaya</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tidak ada biaya tersembunyi; rincian modul AI, software, hingga 3D design dijabarkan secara jujur.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
            <div className="text-3xl">🤝</div>
            <h3 className="font-bold text-white text-lg">Bimbingan 1-on-1</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tidak sekadar melepas produk, kami menyediakan sesi bimbingan teknis untuk memastikan pemahaman alur kerja sistem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
