"use client";

import { useState } from "react";

const PROJECTS = [
  {
    id: "P-01",
    name: "TBScope AI",
    category: "Computer Vision / Robotic Microscopy & TB AI",
    description:
      "Robot mikroskop cerdas otomatis berbasis AI (PySide6, OpenCV, PyTorch) untuk prediksi autofokus robotik dan deteksi presisi Bakteri Tuberculosis (TBC).",
    tags: ["Robotic Microscopy", "Autofocus AI", "TB Detection", "OpenRB Serial"],
    badgeColor: "border-purple-800/60 bg-purple-950 text-purple-400",
    glowColor: "from-purple-500/10 to-cyan-500/5 hover:border-purple-500/50",
  },
  {
    id: "P-02",
    name: "Smartdentiva",
    category: "Computer Vision / Object Detection",
    description:
      "Deteksi penyakit gigi berbasis Object Detection dari citra medis untuk mengidentifikasi dan mendiagnosa kondisi kesehatan gigi secara akurat.",
    tags: ["Object Detection", "Dental Imaging", "Early Diagnosis"],
    badgeColor: "border-cyan-800/60 bg-cyan-950 text-cyan-400",
    glowColor: "from-cyan-500/10 to-blue-500/5 hover:border-cyan-500/50",
  },
  {
    id: "P-03",
    name: "AcneScan",
    category: "Computer Vision / Multilabel Classification",
    description:
      "Aplikasi klasifikasi multilabel untuk mengidentifikasi tingkat keparahan & jenis jerawat, dilengkapi fitur rekomendasi penanganan & perawatan kulit.",
    tags: ["Multilabel Classification", "Dermatology AI", "Care Recommendation"],
    badgeColor: "border-blue-800/60 bg-blue-950 text-blue-400",
    glowColor: "from-blue-500/10 to-cyan-500/5 hover:border-blue-500/50",
  },
  {
    id: "P-04",
    name: "HeMoVision",
    category: "Computer Vision / Non-Invasive Medical AI",
    description:
      "Sistem prediksi nilai Hemoglobin (Hb) secara non-invasif berbasis visi komputer dengan memanfaatkan analisis citra area kuku tangan.",
    tags: ["Hb Level Prediction", "Nailbed Imaging", "Non-Invasive AI"],
    badgeColor: "border-emerald-800/60 bg-emerald-950 text-emerald-400",
    glowColor: "from-emerald-500/10 to-cyan-500/5 hover:border-emerald-500/50",
  },
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portofolio" className="py-24 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section + Tombol Navigasi Carousel */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Portofolio Riset & Teknologi
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Studi Kasus Proyek Riset
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Kredibilitas pengerjaan proyek riset, visi komputer, dan sistem otomatisasi medis presisi.
            </p>
          </div>

          {/* Navigasi Panah Carousel (← / →) */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-900 hover:border-cyan-500/60 transition-all hover:scale-105 active:scale-95 shadow-lg"
              aria-label="Proyek Sebelumnya"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-white flex items-center justify-center hover:bg-slate-900 hover:border-cyan-500/60 transition-all hover:scale-105 active:scale-95 shadow-lg"
              aria-label="Proyek Selanjutnya"
            >
              →
            </button>
          </div>
        </div>

        {/* Display Card Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className="w-full shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
              >
                <div
                  className={`h-full p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 bg-gradient-to-br ${p.glowColor} relative overflow-hidden group transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs tracking-widest text-slate-400">
                      <span className="font-bold text-cyan-400">{p.id}</span>
                      <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${p.badgeColor}`}>
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Scope Tags */}
                  <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-medium text-slate-400">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indikator Titik (Dots Pagination) */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-cyan-400"
                  : "w-2.5 bg-slate-800 hover:bg-slate-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}




