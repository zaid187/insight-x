import Navbar from "@/components/navbar";
import Companies from "@/components/companies";
import RegisterCTA from "@/components/register-cta";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">

      {/* Global Grid Background */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className="absolute inset-0 opacity-30"
      />

      {/* Global Glow Effects */}
      <div className="pointer-events-none absolute left-1/2 top-[10%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="pointer-events-none absolute left-1/2 top-[60%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <Navbar />

      <div className="relative z-10">
        <RegisterCTA />
        <Companies />
      </div>

    </main>
  );
}