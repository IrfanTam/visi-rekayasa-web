import Image from "next/image";

export default function Footer() {
    return (
        <footer id="kontak" className="bg-slate-950 border-t border-slate-800 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/pt visi rekayasa half.png"
                                alt="Logo PT Visi Rekayasa Nusantara"
                                width={40}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                            <span className="font-extrabold text-lg tracking-wider text-white">
                                PT VISI REKAYASA NUSANTARA
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Firma rekayasa teknologi independen berbasis di Jakarta Timur. Menghadirkan solusi AI, IoT, Embedded Software, dan 3D Prototyping presisi.
                        </p>
                    </div>

                    <div className="md:col-span-4 space-y-3 text-sm">
                        <h4 className="font-bold text-white text-base mb-2">Hubungi Kami</h4>
                        <p className="text-slate-400 flex items-start gap-2">📍 Matraman, Jakarta Timur, Indonesia</p>
                        <p className="text-slate-400 flex items-center gap-2">✉️ visirekayasanusantara@gmail.com</p>
                        <p className="text-slate-400 flex items-center gap-2">💬 +62 819-1041-1103 (WhatsApp)</p>
                    </div>

                    <div className="md:col-span-3 space-y-3 text-sm">
                        <h4 className="font-bold text-white text-base mb-2">Jam Operasional</h4>
                        <p className="text-slate-400">Senin – Sabtu</p>
                        <p className="text-cyan-400 font-semibold">09.00 – 18.00 WIB</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
                    © 2026 PT Visi Rekayasa Nusantara. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
