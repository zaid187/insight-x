"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section
  className="
    relative
    flex
    min-h-screen
    items-center
    justify-center
    overflow-hidden
    bg-background
    px-6
    pt-24
    md:pt-16
  "
>

      {/* Grid Background */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className="absolute inset-0 opacity-30"
      />

      {/* Glow Effects */}
      <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl"
      >
        <div className="rounded-[32px] border border-border bg-card/60 p-10 shadow-2xl backdrop-blur-xl md:p-20">

          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-border bg-muted px-5 py-2 text-sm text-muted-foreground">
              KJSCE Alumni Cell Presents
            </div>
          </div>

          <div className="text-center">
            <h1
  className="
    text-[3.5rem]
    sm:text-[5rem]
    md:text-8xl
    lg:text-[10rem]
    font-bold
    tracking-tight
    text-foreground
    leading-none
  "
>
  INSIGHT-X
</h1>

            <p className="mt-5 text-2xl text-muted-foreground md:text-4xl">
              Campus → Corporate
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground">
              Connect with professionals from Microsoft, Jio and JPMorgan
              Chase & Co. Explore career paths, industry trends,
              networking opportunities and practical insights for life
              beyond campus.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              className="
                rounded-full
                bg-blue-600
                px-10
                py-4
                text-lg
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-blue-500
                hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]
              "
            >
              Register Now
            </button>
          </div>

          <div className="mt-10 text-center text-muted-foreground">
            📅 13 October 2025 &nbsp;&nbsp; • &nbsp;&nbsp;
            🕔 5:00 PM &nbsp;&nbsp; • &nbsp;&nbsp;
            📍 B-113
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-4xl font-bold text-foreground">
                300+
              </h3>
              <p className="mt-2 text-muted-foreground">
                Students Expected
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-4xl font-bold text-foreground">
                3
              </h3>
              <p className="mt-2 text-muted-foreground">
                Industry Leaders
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-4xl font-bold text-foreground">
                1
              </h3>
              <p className="mt-2 text-muted-foreground">
                Networking Session
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}