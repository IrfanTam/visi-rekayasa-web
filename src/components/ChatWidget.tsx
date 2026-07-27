"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Halo! Saya VRN AI Consultant. Ada yang bisa saya bantu mengenai kecerdasan buatan, visi komputer, atau layanan rekayasa di PT Visi Rekayasa Nusantara?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: query };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (data.choices && data.choices[0]?.message) {
        setMessages((prev) => [...prev, data.choices[0].message]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Maaf, terjadi masalah koneksi. Anda juga dapat langsung berkonsultasi via WhatsApp ke +62 819-1041-1103.",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Maaf, sistem AI sedang offline. Silakan hubungi kami di WA: +62 819-1041-1103.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tombol Melayang (Floating Button) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all flex items-center gap-2 group border border-cyan-300/40"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping" />
          <span className="text-lg">🤖</span>
          <span>Tanya VRN AI</span>
        </button>
      )}

      {/* Jendela Chat (Pop-up Window) */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header Window */}
          <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold">
                🤖
              </div>
              <div>
                <div className="text-sm font-bold text-white">VRN AI Consultant</div>
                <div className="text-[10px] text-cyan-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Online 24/7 (OpenRouter AI)
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
            >
              ✕
            </button>
          </div>

          {/* Area Pesan Chat */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none"
                      : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl rounded-tl-none text-slate-400 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-100" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 border-t border-slate-900 flex gap-2 overflow-x-auto scrollbar-none text-[11px]">
            <button
              onClick={() => handleSend("Apa saja layanan PT VRN?")}
              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 shrink-0 hover:border-cyan-500/50 transition-colors"
            >
              💡 Layanan VRN
            </button>
            <button
              onClick={() => handleSend("Siapa Founder PT VRN?")}
              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 shrink-0 hover:border-cyan-500/50 transition-colors"
            >
              🎓 Profil Founder
            </button>
            <button
              onClick={() => handleSend("Jelaskan proyek TBScope AI")}
              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 shrink-0 hover:border-cyan-500/50 transition-colors"
            >
              🔬 TBScope AI
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan sesuatu..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Kirim
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
