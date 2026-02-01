export default function Hero() {
  
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-20 lg:px-40 lg:py-24">
      {/* Abstract Decorative Shape */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-soft-pink dark:bg-primary/10 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-soft-pink/50 dark:bg-primary/5 rounded-full blur-[60px] -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-primary dark:text-slate-400 text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              Hi, I'm Diah Maulida Akil
            </h1>
            <p className="text-primary/70 dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
             Fresh graduate student majoring in Informatics Engineering at University Of Muhammadiyah Malang
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-white h-14 px-6 rounded-lg font-bold hover:shadow-xl transition-all">
              View My Work
            </button>
            <button className="border-2 border-primary text-primary h-14 px-8 rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
            Get in Touch
            </button>
          </div>
        </div>

        {/* Foto Profile */}
        <div className="flex-1 w-full max-w-[600px]">
          <div className="relative group">
            <div className="absolute -inset-4 bg-soft-pink rounded-xl -z-10 transition-transform group-hover:rotate-2"></div>
            <div 
              className="aspect-[4/5] w-full bg-center bg-cover rounded-xl shadow-2xl border-4 border-white dark:border-gray-800" 
              style={{ backgroundImage: 'url("/profil-diah.png")' }} 
            >
              {}
            </div>
          </div>
        </div>
        {}
      </div>
    </section>
  );
}