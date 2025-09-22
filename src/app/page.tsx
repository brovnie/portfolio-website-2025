import { AboutMe } from "@/components/about/AboutMe";
import { Contact } from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Navigation } from "@/components/nav/Navigation";
import Projects from "@/components/work/Projects";
import LenisScrollProvider from "@/context/LenisContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <LenisScrollProvider>
      <ThemeProvider>
        <div className="bg-white dark:bg-dark h-full">
          <div className=" container m-auto">
            <Navigation />
          </div>
          <Hero />
          <div className="container mx-auto">
            <div className="mx-5 xs:mx-0">
              <AboutMe />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </LenisScrollProvider>
  );
}
