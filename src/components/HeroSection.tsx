export default function HeroSection() {
    const waUrl = "https://wa.me/6281910411103?text=Halo%20PT%20Visi%20Rekayasa%20Nusantara,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20rekayasa%20teknologi.";

    return (
        <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide mb-8">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Clean Tech Engineering Firm — Jakarta Timur
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
                    Solusi Rekayasa Teknologi,{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                        AI, & Hardware Terintegrasi.
                    </span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    PT Visi Rekayasa Nusantara menghadirkan layanan rekayasa sistem{" "}
                    <span className="text-slate-200 font-medium">end-to-end</span>—dari pengembangan model Artificial Intelligence, perangkat lunak terintegrasi, hingga prototipe hardware dan desain 3D untuk kebutuhan riset, industri, maupun tugas akhir.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:scale-105"
                    >
                        Diskusi Proyek Anda
                    </a>
                    <a
                        href="#portofolio"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition-all"
                    >
                        Lihat Portofolio →
                    </a>
                </div>
            </div>
        </section>
    );
}
