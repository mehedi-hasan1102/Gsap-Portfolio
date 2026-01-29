import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[12vw] leading-none tracking-tight font-normal uppercase">
            CREATIVE
          </h1>
          <h1 className="text-[12vw] leading-none tracking-tight font-normal uppercase text-[#ff4d4d]">
            DEVELOPER
          </h1>
          <p className="mt-8 text-lg tracking-[0.3em] opacity-60 uppercase">
            Scroll down to explore
          </p>
        </div>
      </main>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
