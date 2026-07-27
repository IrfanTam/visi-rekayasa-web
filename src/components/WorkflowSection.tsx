const steps = [
    { num: "01", title: "Konsultasi", desc: "Diskusi awal ide, kebutuhan sistem, dan pembatasan fitur proyek." },
    { num: "02", title: "Penawaran & SPH", desc: "Penerbitan estimasi biaya (RAB) & invoice bertanda tangan resmi." },
    { num: "03", title: "DP 50% & Eksekusi", desc: "Proyek mulai dieksekusi oleh tim engineering setelah pembayaran DP." },
    { num: "04", title: "Progress Demo", desc: "Update berkala progres coding, latihan model AI, atau bentuk fisik hardware." },
    { num: "05", title: "Serah Terima", desc: "Demo akhir, pelunasan, dan penyerahan seluruh source code, file CAD, & dokumentasi." },
];

export default function WorkflowSection() {
    return (
        <section id="alur-kerja" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-md">
                    Alur Kerja Transparan
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                    5 Langkah Pengerjaan Proyek
                </h2>
                <p className="text-slate-400 text-base">
                    Proses kerja terstruktur dengan legalitas dan administrasi perusahaan yang jelas.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {steps.map((step, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
                        <span className="text-4xl font-extrabold text-cyan-500/30 mb-2 block">{step.num}</span>
                        <h4 className="font-bold text-white text-base mb-2">{step.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
