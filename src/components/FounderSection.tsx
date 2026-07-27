const PUBLICATIONS = [
    {
        type: "Jurnal Ilmiah",
        title: "Autofocus Algorithm and Deep Learning-Based Classification for Robotic Microscopy",
        publisher: "IEEE / Springer / International Journal", // Sesuaikan dengan nama jurnal kamu
        year: "2025",
        domain: "Computer Vision & Medical Imaging",
        link: "#", // Tambahkan link DOI atau Google Scholar jika ada
    },
    {
        type: "Konferensi",
        title: "Deep Learning Approach for Medical Image Diagnostics on Edge Embedded Devices",
        publisher: "International Conference on Engineering & AI",
        year: "2024",
        domain: "Embedded Systems & AI",
        link: "#",
    },
];

export default function FounderSection() {
    return (
        <section id="founder" className="py-24 bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-md">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Founder & Principal Engineer
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Muhammad Irfan Tam Tomo
                    </h2>
                    <p className="text-cyan-400 text-sm font-mono tracking-wide">
                        Founder & Lead Engineer PT Visi Rekayasa Nusantara
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Bio Founder */}
                    <div className="lg:col-span-5 space-y-6 bg-slate-900/80 p-8 rounded-3xl border border-slate-800">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-3xl text-slate-950 shadow-lg shadow-cyan-500/20">
                            MI
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white">Muhammad Irfan Tam Tomo</h3>
                            <p className="text-xs text-slate-400 font-mono mt-1">
                                Fokus Riset: Computer Vision, Robotic Microscopy, Deep Learning & Embedded Systems
                            </p>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed">
                            Berpengalaman dalam perancangan arsitektur kecerdasan buatan dan integrasi hardware presisi. Berfokus pada riset pencitraan medis, otomatisasi mikroskopi robotik, serta penerapan Vision Transformer untuk diagnostik masa depan.
                        </p>

                        <div className="pt-4 border-t border-slate-800 flex gap-4 text-xs">
                            <div className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                                🎓 Peneliti & Practitioner
                            </div>
                            <div className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 font-mono">
                                IEEE / Scholar
                            </div>
                        </div>
                    </div>

                    {/* Publikasi Jurnal & Konferensi */}
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            <span>📚</span> Publikasi Ilmiah & Konferensi
                        </h3>

                        <div className="space-y-4">
                            {PUBLICATIONS.map((pub, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                                >
                                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-semibold">
                                            {pub.type} ({pub.year})
                                        </span>
                                        <span className="text-slate-500">{pub.domain}</span>
                                    </div>

                                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {pub.title}
                                    </h4>

                                    <p className="text-xs text-slate-400 mt-2 font-mono">
                                        Dipublikasikan di: <strong className="text-slate-200">{pub.publisher}</strong>
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-slate-500 italic text-right">
                            * Draf publikasi dan daftar jurnal lengkap dapat diperbarui sesuai riwayat riset kamu.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
