import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div className="font-display relative flex min-h-screen w-full flex-col bg-background-light text-primary">
      <Navbar /> 
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 py-10 px-6 md:px-16">
        <Hero />
        <Projects /> 
      </main>
      <Footer /> {
      /* 2. Tambahkan di sini */}
    </div>
  );
}