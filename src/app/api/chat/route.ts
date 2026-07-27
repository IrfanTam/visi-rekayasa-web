import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;

    // System Prompt Khas PT VRN untuk Asisten AI
    const systemPrompt = {
      role: "system",
      content: `Anda adalah VRN AI Engineering Consultant, asisten kecerdasan buatan resmi dari PT Visi Rekayasa Nusantara (PT VRN).
Tugas Anda adalah menjawab pertanyaan pengunjung mengenai layanan, latar belakang riset, dan profil PT VRN secara ramah, profesional, dan teknis namun mudah dipahami.

Informasi Resmi PT VRN:
- Perusahaan: PT Visi Rekayasa Nusantara (PT VRN) — PT Perorangan resmi di bawah UU Cipta Kerja.
- Founder & Lead Engineer: Muhammad Irfan Tam Tomo (Alumni S2 Terapan Teknik Elektro PENS & D4 Teknik Elektromedis Poltekkes Kemenkes Jakarta II).
- Publikasi Riset Founder: 
  1. IEEE Xplore 2025 (Autofocus Robotic Microscopy)
  2. JOIV Journal 2026 (Step-to-Focus Prediction Deep Learning)
  3. JPM UTDI 2026 (Water Quality Meter Calibration)
- Layanan Utama: Artificial Intelligence, Computer Vision, Medical Imaging, Robotic Microscopy, Embedded Software (PySide GUI / Raspberry Pi), PCB Custom, dan 3D Hardware Prototyping.
- Studi Kasus Proyek:
  1. TBScope AI (Robot Mikroskop Cerdas & Deteksi Bakteri TBC)
  2. Smartdentiva (Object Detection Diagnostik Gigi)
  3. AcneScan (Multilabel Classification Jerawat & Rekomendasi Kulit)
  4. HeMoVision (Prediksi Kadar Hemoglobin/Hb Non-Invasif dari Citra Kuku)
- Kontak Resmi: WhatsApp (+62 819-1041-1103), Email (visirekayasanusantara@gmail.com), Alamat (Matraman, Jakarta Timur).

Pedoman Jawaban:
- Gunakan Bahasa Indonesia yang sopan dan profesional.
- Jika pengguna ingin berkonsultasi lebih lanjut mengenai proyek atau estimasi biaya, arahkan mereka untuk mengklik tombol WhatsApp atau menghubungi +62 819-1041-1103.
- Jawab secara ringkas, padat, dan informatif.`
    };

    if (!apiKey) {
      // Fallback jawaban Cerdas jika API Key belum dipasang di environment
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      let reply = "Halo! Saya adalah VRN AI Consultant. Ada yang bisa saya bantu terkait layanan Artificial Intelligence, Computer Vision, atau Prototyping Hardware di PT Visi Rekayasa Nusantara?";
      
      if (lastUserMsg.toLowerCase().includes("biaya") || lastUserMsg.toLowerCase().includes("harga") || lastUserMsg.toLowerCase().includes("konsultasi")) {
        reply = "Untuk diskusi estimasi biaya dan konsultasi proyek secara langsung, Anda bisa langsung menghubungi Founder & Lead Engineer kami via WhatsApp di +62 819-1041-1103.";
      } else if (lastUserMsg.toLowerCase().includes("irfan") || lastUserMsg.toLowerCase().includes("founder")) {
        reply = "Founder PT VRN adalah Muhammad Irfan Tam Tomo, berlatar belakang S2 Terapan Teknik Elektro PENS dan D4 Teknik Elektromedis Poltekkes Kemenkes Jakarta II, spesialis di bidang Medical Computer Vision & Robotic Microscopy.";
      } else if (lastUserMsg.toLowerCase().includes("tbscope") || lastUserMsg.toLowerCase().includes("tbc")) {
        reply = "TBScope AI adalah robot mikroskop cerdas berbasis AI (PySide6, PyTorch) untuk prediksi autofokus robotik dan deteksi presisi Bakteri Tuberculosis (TBC) dari sampel sputum.";
      }

      return NextResponse.json({
        choices: [{ message: { role: "assistant", content: reply } }]
      });
    }

    // Panggilan ke API OpenRouter jika OPENROUTER_API_KEY sudah diset
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://visi-rekayasa-web.vercel.app",
        "X-Title": "PT Visi Rekayasa Nusantara",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-lite-preview-02-05:free", // Atau model open-source gratis pilihan kamu
        messages: [systemPrompt, ...messages],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return NextResponse.json(
      { error: "Gagal menghubungkan ke layanan AI" },
      { status: 500 }
    );
  }
}
