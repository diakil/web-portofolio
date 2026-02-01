import Link from "next/link";

export default function Projects() {
  const projectData = [
    {
      title: "AWS-Based Coding Education Platform",
      category: "Cloud Architecture",
      year: "2023",
      image: "/aws-based.png",
      background: "Developed a structured EdTech platform to provide accessible, easy-to-understand learning resources for both beginners and experienced learners as programming becomes essential across all industries."
    },
    {
      title: "Create A News Blog",
      category: "Web News Experience Design",
      year: "2022",
      image: "/news-blog.png",
      background: "Designed and developed a modern news platform focused on readability and user engagement, ensuring a seamless information flow through intuitive layout design and optimized content delivery."
    },
    {
      title: "Login Page Register",
      category: "UI/UX & Web Development",
      year: "2025",
      image: "/login-page.png",
      background: "Created a secure and user-friendly authentication interface, focusing on seamless user flow and responsive design to enhance the initial onboarding experience."
    },
    {
      title: "React Stylling",
      category: "Front-end Development",
      year: "2025",
      image: "/react-styling.png",
      background: "Explored advanced CSS-in-JS techniques and modern styling frameworks in React to create highly responsive, maintainable, and visually polished user interfaces."
    }
  ];


  return (
    <section className="bg-[#FDEDED]/50 py-20 px-6 rounded-3xl mt-10">
      <div className="space-y-2 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#223549]/60">Portfolio</span>
        <h2 className="text-[#223549] text-3xl md:text-4xl font-black">Selected Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projectData.map((project, index) => (
          <div key={index} className="group flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-xl border-4 border-white bg-white shadow-lg">
              <img src={project.image} alt={project.title} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-start pt-2">
              <div>
                <h3 className="text-[#223549] text-xl font-bold">{project.title}</h3>
                <p className="text-[#223549]/70 text-sm font-medium">{project.category}</p>
                <div className="mt-3 text-xs bg-white/60 p-4 rounded-xl border border-[#223549]/10 text-[#223549]">
                  <p className="mb-1"><strong>Background:</strong> {project.background}</p>
                </div>
              </div>
              <span className="text-[#223549]/40 text-sm font-mono">{project.year}</span>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="mt-20 flex justify-center">
        <Link href="/projects" className="group flex items-center gap-3 text-[#223549] text-lg font-bold">
          Browse all projects 
          <span className="transition-transform group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </section>
  );
}