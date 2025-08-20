import { Navigation } from "@/components/nav/Navigation";
import { ThemeProvider } from "@/context/ThemeContext";
export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black">
        <Navigation></Navigation>
      </div>
    </ThemeProvider>
  );
}
