"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Microsoft",
    logo: "/logos/microsoft.png",
    description: "Cloud, AI, Software Engineering",
  },
  {
    name: "Jio",
    logo: "/logos/jio.png",
    description: "Telecom, Digital Platforms",
  },
  {
    name: "JPMorgan Chase",
    logo: "/logos/jpmc.png",
    description: "Finance, Technology",
  },
];

export default function Companies() {
  return (
    <section className="relative bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Section Header */}
        <div className="text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
            Featured Industry Leaders
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
            Learn From The Best
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Meet professionals from leading companies and gain insights
            into real-world careers, hiring processes and industry trends.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">

          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                mx-auto
                w-full
                max-w-[320px]
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/30
                hover:bg-white/[0.07]
                md:max-w-none
                md:p-8
              "
            >
              <div className="flex justify-center">
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={100}
                    height={100}
                    className="h-auto w-auto"
                  />
                </div>
              </div>

              <h3 className="mt-8 text-center text-2xl font-bold text-foreground">
                {company.name}
              </h3>

              <p className="mt-3 text-center text-zinc-400">
                {company.description}
              </p>

              <div className="mt-6 h-px bg-white/10" />

              <p className="mt-6 text-center text-sm text-zinc-500">
                Industry experts sharing practical insights and career
                guidance.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}