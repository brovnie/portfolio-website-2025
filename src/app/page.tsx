import { Hero } from "@/components/hero/Hero";
import { Navigation } from "@/components/nav/Navigation";
import { ThemeProvider } from "@/context/ThemeContext";
export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-dark h-screen">
        <div className=" container m-auto">
          <Navigation></Navigation>
          <Hero />
        </div>
      </div>
    </ThemeProvider>
  );
}
