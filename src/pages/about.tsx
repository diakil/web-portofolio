import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="bg-[#FCF9EA] min-h-screen font-display text-[#223549]">
      <Navbar />
      
      <main className="flex flex-col lg:flex-row min-h-[calc(100-screen-80px)]">
        {/* Sisi Kiri: Foto Profile */}
        <section className="flex-1 bg-[#FDEDED] flex items-center justify-center p-8 lg:p-20">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-xl shadow-2xl border-4 border-white">
            <img 
              src="/profil-diah.png" 
              alt="Professional Headshot" 
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Sisi Kanan: Bio & Form */}
        <section className="flex-1 p-8 lg:px-24 lg:py-20 bg-[#FCF9EA]">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-black mb-6 italic">About Me</h1>
            <div className="space-y-4 text-lg leading-relaxed opacity-80">
              <p>Informatics student and aspiring Front-End Developer with a focus on building responsive, user-friendly web systems. I specialize in crafting clean UI using semantic HTML and modern CSS layouts to deliver seamless digital experiences.</p>
              <p>Currently dedicated to mastering the latest web technologies and open to new collaborations. Let’s connect and turn your ideas into reality—reach me at diahmaulidaa@gmail.com!</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-t border-[#223549]/10 pt-12">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Name</label>
                  <input type="text" placeholder="Your Name" className="border-2 border-[#223549] bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#223549]/20" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Email</label>
                  <input type="email" placeholder="hello@example.com" className="border-2 border-[#223549] bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#223549]/20" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Message</label>
                <textarea rows={4} placeholder="How can I help you?" className="border-2 border-[#223549] bg-transparent rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#223549]/20"></textarea>
              </div>
              <button className="bg-[#223549] text-white font-bold py-4 px-10 rounded-lg hover:opacity-90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}