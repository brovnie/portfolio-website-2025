import { Hero } from "@/components/hero/Hero";
import { Navigation } from "@/components/nav/Navigation";
import Projects from "@/components/work/Projects";
import LenisScrollProvider from "@/context/LenisContext";
import { ThemeProvider } from "@/context/ThemeContext";
export default function Home() {
  return (
    <LenisScrollProvider>
      <ThemeProvider>
        <div className="bg-white dark:bg-dark h-screen scroll-smooth">
          <div className=" container m-auto">
            <Navigation></Navigation>
            <Hero />
            <Projects />
          </div>
        </div>
      </ThemeProvider>
    </LenisScrollProvider>
  );
}
