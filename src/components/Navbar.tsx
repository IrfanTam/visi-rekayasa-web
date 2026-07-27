"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const waNumber = "6281910411103";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
        "Halo PT Visi Rekayasa Nusantara, saya ingin berkonsultasi mengenai proyek rekayasa teknologi."
    )}`;

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo PT VRN */}
                <a href="#" className="flex items-center gap-3 group">
                    <Image
                        src="/pt visi rekayasa half.png"
                        alt="Logo PT Visi Rekayasa Nusantara"
                        width={44}
                        height={44}
                        className="h-11 w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col">
                        <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
                            PT VISI REKAYASA
                        </span>
                        <span className="text-[10px] tracking-[0.25em] text-slate-400 font-medium">
                            NUSANTARA
                        </span>
                    </div>
                </a>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#" className="hover:text-cyan-400 transition-colors">Beranda</a>
                    <a href="#tentang-kami" className="hover:text-cyan-400 transition-colors">Tentang Kami</a>
                    <a href="#layanan" className="hover:text-cyan-400 transition-colors">Layanan</a>
                    <a href="#portofolio" className="hover:text-cyan-400 transition-colors">Portofolio</a>
                    <a href="#alur-kerja" className="hover:text-cyan-400 transition-colors">Alur Kerja</a>
                    <a href="#kontak" className="hover:text-cyan-400 transition-colors">Kontak</a>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 inline-block"
                    >
                        Hubungi Kami
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-200 text-sm font-medium">Beranda</a>
                    <a href="#tentang-kami" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-200 text-sm font-medium">Tentang Kami</a>
                    <a href="#layanan" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-200 text-sm font-medium">Layanan</a>
                    <a href="#portofolio" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-200 text-sm font-medium">Portofolio</a>
                    <a href="#alur-kerja" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-200 text-sm font-medium">Alur Kerja</a>
                    <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-slate-200 text-sm font-medium">Kontak</a>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-4 px-4 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950">
                        Hubungi Kami Via WA
                    </a>
                </div>
            )}
        </header>
    );
}
