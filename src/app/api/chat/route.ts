import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;
    const lastUserMsg = messages[messages.length - 1]?.content || "";
    const lowerQuery = lastUserMsg.toLowerCase();

    // Fungsi Jawaban Cerdas Konsultan VRN (Local Fallback & Keyword Matcher)
    const getLocalVRNAnswer = (query: string) => {
      const q = query.toLowerCase();

      if (q.includes("kontak") || q.includes("wa") || q.includes("whatsapp") || q.includes("telepon") || q.includes("hubungi") || q.includes("email")) {
        return "Anda dapat menghubungi kami via WhatsApp di +62 819-1041-1103 atau melalui email di visirekayasanusantara@gmail.com. Kantor kami berlokasi di Matraman, Jakarta Timur.";
      }
      
      if (q.includes("layanan") || q.includes("jasa") || q.includes("bisa buat apa")) {
        return "PT Visi Rekayasa Nusantara melayani: 1. AI & Deep Learning Model Training, 2. Computer Vision & Medical Imaging, 3. Embedded Software (PySide GUI/Raspberry Pi), 4. PCB Custom & IoT Hardware Prototyping, 5. Desain 3D Enclosure, 6. Konsultasi Riset & Tugas Akhir.";
      }

      if (q.includes("biaya") || q.includes("harga") || q.includes("tarif") || q.includes("konsultasi")) {
        return "Estimasi biaya pengerjaan disesuaikan dengan tingkat kompleksitas sistem (Hardware, AI Model, GUI, dan Uji Teknis). Silakan konsultasikan kebutuhan proyek Anda via WhatsApp di +62 819-1041-1103.";
      }

      if (q.includes("irfan") || q.includes("founder") || q.includes("pemilik") || q.includes("pendidikan") || q.includes("kuliah")) {
        return "Founder & Lead Engineer PT VRN adalah Muhammad Irfan Tam Tomo. Beliau merupakan alumni S2 Terapan Teknik Elektro PENS dan D4 Teknik Elektromedis Poltekkes Kemenkes Jakarta II, spesialis di bidang Medical Computer Vision & Robotic Microscopy.";
      }

      if (q.includes("tbscope") || q.includes("tbc") || q.includes("tb")) {
        return "TBScope AI adalah sistem robot mikroskop cerdas berbasis AI (PySide6, PyTorch, OpenRB) untuk otomatisasi autofokus robotik dan deteksi presisi Bakteri Tuberculosis (TBC) dari sampel citra sputum.";
      }

      if (q.includes("smartdentiva") || q.includes("gigi")) {
        return "Smartdentiva adalah sistem visi komputer berbasis Object Detection untuk mengidentifikasi dan mendiagnosa kondisi kesehatan & penyakit gigi dari citra medis secara presisi.";
      }

      if (q.includes("acnescan") || q.includes("jerawat") || q.includes("kulit")) {
        return "AcneScan adalah aplikasi klasifikasi multilabel untuk menganalisis tingkat keparahan & jenis jerawat pada kulit, dilengkapi sistem rekomendasi perawatan.";
      }

      if (q.includes("hemovision") || q.includes("darah") || q.includes("hb") || q.includes("kuku")) {
        return "HeMoVision adalah sistem estimasi kadar Hemoglobin (Hb) secara non-invasif dengan menganalisis citra area kuku tangan menggunakan visi komputer.";
      }

      if (q.includes("jurnal") || q.includes("paper") || q.includes("publikasi") || q.includes("ieee")) {
        return "Founder PT VRN memiliki 3 publikasi riset terverifikasi: 1. IEEE Xplore 2025 (Autofocus Robotic Microscopy), 2. JOIV Journal 2026 (Step-to-Focus Prediction), 3. JPM UTDI 2026 (Water Quality Meter Calibration).";
      }

      return "PT Visi Rekayasa Nusantara adalah penyedia layanan rekayasa sistem end-to-end (AI, Hardware IoT, Software GUI, dan 3D Prototyping). Ada yang spesifik ingin Anda tanyakan mengenai layanan atau proyek riset kami?";
    };

    // System Prompt untuk OpenRouter
    const systemPrompt = {
      role: "system",
      content: `Anda adalah VRN AI Engineering Consultant, asisten kecerdasan buatan resmi dari PT Visi Rekayasa Nusantara (PT VRN).
Tugas Anda adalah menjawab pertanyaan pengunjung mengenai layanan, latar belakang riset, dan profil PT VRN secara ramah, profesional, dan teknis namun mudah dipahami.

Informasi Resmi PT VRN:
- Perusahaan: PT Visi Rekayasa Nusantara (PT VRN) — PT Perorangan resmi di bawah UU Cipta Kerja.
- Founder & Lead Engineer: Muhammad Irfan Tam Tomo (Alumni S2 Terapan Teknik Elektro PENS & D4 Teknik Elektromedis Poltekkes Kemenkes Jakarta II).
- Publikasi Riset Founder: IEEE Xplore 2025, JOIV Journal 2026, JPM UTDI 2026.
- Layanan Utama: Artificial Intelligence, Computer Vision, Medical Imaging, Robotic Microscopy, Embedded Software (PySide GUI / Raspberry Pi), PCB Custom, dan 3D Hardware Prototyping.
- Studi Kasus Proyek: TBScope AI (Robot Mikroskop TBC), Smartdentiva (Diagnostik Gigi), AcneScan (Analisis Jerawat), HeMoVision (Prediksi Hb Non-Invasif).
- Kontak Resmi: WhatsApp (+62 819-1041-1103), Email (visirekayasanusantara@gmail.com), Alamat (Matraman, Jakarta Timur).

Jawab secara ringkas, ramah, dan profesional dalam Bahasa Indonesia.`
    };

    if (apiKey) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "HTTP-Referer": "https://visi-rekayasa-web.vercel.app",
            "X-Title": "PT Visi Rekayasa Nusantara",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openrouter/auto", // Otomatis memilih model gratis terbaik yang aktif di OpenRouter
            messages: [systemPrompt, ...messages],
          }),
        });

        const data = await response.json();

        if (data.choices && data.choices[0]?.message) {
          return NextResponse.json(data);
        }
      } catch (err) {
        console.warn("OpenRouter API call failed, falling back to local engine:", err);
      }
    }

    // Menggunakan Engine Konsultan VRN lokal jika OpenRouter sibuk/error
    const replyContent = getLocalVRNAnswer(lowerQuery);
    return NextResponse.json({
      choices: [{ message: { role: "assistant", content: replyContent } }]
    });

  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json({
      choices: [{
        message: {
          role: "assistant",
          content: "Silakan hubungi tim kami via WhatsApp di +62 819-1041-1103 untuk konsultasi proyek."
        }
      }]
    });
  }
}
