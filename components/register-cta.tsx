"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { MorphingText } from "@/components/ui/morphing-text";
export default function RegisterCTA() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background Grid */}
      {/* <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className="absolute inset-0 opacity-30"
      /> */}

      {/* Glow Effects */}
      {/* <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[120px]" /> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative
          mx-auto
          mt-23
          w-[92%]
          max-w-[1200px]
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          px-5
          py-10
          text-center
          md:px-16
          md:py-20
        "
      >
        {/* Badge */}
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-400 md:text-sm">
          Limited Seats Available
        </div>

        {/* Heading */}
        <div className="mt-6 md:mt-8">
  <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-7xl">
    Ready To Join
  </h2>

  <TypingAnimation
    duration={75}
    className="
      block
      text-4xl
      font-bold
      leading-tight
      text-blue-500
      sm:text-5xl
      md:text-7xl
    "
  >
    Insight-X?
  </TypingAnimation>
</div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 md:mt-8 md:max-w-3xl md:text-lg">
          Meet professionals from Microsoft, Jio and JPMorgan Chase.
          Learn how the corporate world works, gain industry insights,
          and build valuable connections for your future.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <Link
            href="/register"
            className="
              rounded-full
              bg-blue-600
              px-8
              py-4
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-500
              md:px-10
              md:py-5
              md:text-lg
            "
          >
            Register Now →
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-black/30
              p-6
              text-center
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/40
              md:p-10
            "
          >
            <h3 className="text-4xl font-bold text-foreground md:text-5xl">
              300+
            </h3>
            <p className="mt-3 text-zinc-400">
              Students Expected
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-black/30
              p-6
              text-center
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/40
              md:p-10
            "
          >
            <h3 className="text-4xl font-bold text-foreground md:text-5xl">
              3
            </h3>
            <p className="mt-3 text-zinc-400">
              Industry Leaders
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-black/30
              p-6
              text-center
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/40
              md:p-10
            "
          >
            <h3 className="text-4xl font-bold text-foreground md:text-5xl">
              1
            </h3>
            <p className="mt-3 text-zinc-400">
              Networking Session
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}