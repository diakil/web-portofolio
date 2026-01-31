import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ProjectGallery() {
  const allProjects = [
    { title: "AWS-Based Coding Education Platform", category: "Cloud Architecture", desc: "Accessible cloud-based programming education.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcEFzk_hEl650V8ifJQ2Kt-jY6JKUnywkwM6i4SSWbRaNjIYB4LCyPG8vNOTdqKzNd_aiQYjyXK2cRJklFwd-fQ0lsOXVUIXUKMPb4KkvaWp3W_PAlw3mabe7FfeUZCGlUlWuacEOeDOyCWVwG_pcQTJTTY4Nys1QDwOaP4rOYGIeVgVLCcf-oGB1B7FO_JZCrwabxTAeYnVN1bLtHbTwz1gHMtWvFfrbw27NLc6kgSWaTbxcM7NEFfgHU4wB94b_UxDGbOK7LX9A" },
    { title: "Create A News Blog", category: "Web News Experience Design", desc: "Full-stack high-end commerce.", img: "/news-blog.png" },
    { title: "Login Page Register", category: "UI/UX & Web Development", desc: "Complete visual system.", img: "/login-page.png" },
    
  ];

  return (
    <div className="bg-[#FCF9EA] min-h-screen font-display">
      <Navbar />
      
      <main className="max-w-[1200px] mx-auto py-12 px-10">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-10 text-[#213448]">
          <h1 className="text-5xl font-black tracking-tight">Selected Works</h1>
          <p className="text-lg opacity-70 max-w-2xl">A collection of my recent creative projects and development work.</p>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 mb-10 flex-wrap">
           {["All Work", "UI/UX Design", "Web Development", "Branding"].map((chip) => (
             <button key={chip} className="px-6 py-2 rounded-lg bg-[#FDEDED] text-[#213448] font-bold border border-[#213448]/5 hover:bg-[#213448] hover:text-[#FCF9EA] transition-all">
               {chip}
             </button>
           ))}
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((proj, i) => (
            <div key={i} className="group flex flex-col rounded-xl overflow-hidden bg-[#FDEDED] cursor-pointer shadow-sm hover:bg-[#213448] transition-all duration-300">
              <div 
                className="w-full aspect-[4/3] bg-cover bg-center" 
                style={{ backgroundImage: `url(${proj.img})` }}
              />
              <div className="p-6">
                <h3 className="text-[#213448] group-hover:text-[#FCF9EA] text-xl font-bold">{proj.title}</h3>
                <p className="text-[#213448]/60 group-hover:text-[#FCF9EA]/70 text-xs font-bold uppercase mt-1">{proj.category}</p>
                <p className="text-[#213448]/80 group-hover:text-[#FCF9EA]/90 text-sm mt-2">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}