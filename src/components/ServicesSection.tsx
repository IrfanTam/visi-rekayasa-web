const servicesData = [
    {
        icon: "🤖",
        title: "Artificial Intelligence & Machine Learning",
        desc: "Pengembangan arsitektur deep learning, optimasi model, tuning hyperparameter, dan komputer visi untuk analisis data medis maupun industri.",
        color: "cyan",
    },
    {
        icon: "🖥️",
        title: "Software & Embedded Development",
        desc: "Pembuatan aplikasi desktop (PySide/Python) dan deployment sistem operasi/perangkat lunak langsung ke perangkat edge seperti Raspberry Pi.",
        color: "blue",
    },
    {
        icon: "🔌",
        title: "Hardware & IoT Engineering",
        desc: "Perancangan skematik & PCB elektronik kustom, integrasi sensor, serta pembuatan sistem embedded terintegrasi.",
        color: "cyan",
    },
    {
        icon: "📐",
        title: "3D Design & Prototyping",
        desc: "Pemodelan CAD 3D untuk pembuatan casing (enclosure) alat, prototipe produk, dan penyiapan berkas siap 3D printing.",
        color: "blue",
    },
    {
        icon: "📱",
        title: "Mobile Application Development",
        desc: "Pengembangan aplikasi Android kustom (berbasis Kodular/Flutter) yang terhubung dengan hardware atau sistem cloud.",
        color: "cyan",
    },
    {
        icon: "👥",
        title: "Konsultasi & Bimbingan Teknis",
        desc: "Pendampingan teknis secara intensif via Google Meet untuk evaluasi sistem, bedah kode, dan pemahaman arsitektur proyek.",
        color: "blue",
    },
];

export default function ServicesSection() {
    return (
        <section id="layanan" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-md">
                    Layanan Utama
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                    Solusi Rekayasa Komprehensif
                </h2>
                <p className="text-slate-400 text-base">
                    Kami mengintegrasikan aspek logika perangkat lunak, arsitektur AI, hingga fisik hardware presisi.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
