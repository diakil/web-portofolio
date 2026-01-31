export default function Footer() {
  return (
    <footer className="w-full">
      {

      }
      <section className="px-6 py-24">
        <div className="bg-[#223549] rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center gap-8 overflow-hidden relative max-w-5xl mx-auto">
          <div className="space-y-4 max-w-2xl relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
              Let's build something cool together!
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium">
              I'm always open to new projects, collaborations, and conversations.
            </p>
          </div>
          <button className="bg-[#F7F5EB] text-[#223549] px-10 py-5 rounded-xl text-lg font-black hover:scale-105 transition-transform shadow-2xl">
            Drop a Message
          </button>
        </div>
      </section>

      {

      }
      <div className="border-t border-[#223549]/10 bg-[#F7F5EB] px-6 py-12 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-[#223549]">
            <span className="font-bold text-lg">Diah Maulida Akil</span>
            <p className="opacity-50 text-sm">© 2026 Portfolio. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-10 text-[#223549]/60">
            <a href="https://www.linkedin.com/in/diahmaulidaa" className="hover:text-[#223549]">LinkedIn</a>
            <a href="https://www.instagram.com/____diakl?igsh=cnQ1bTRhazRwYmc5&utm_source=qr" className="hover:text-[#223549]">Instagram</a>
            <a href="https://x.com/" className="hover:text-[#223549]">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}