"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    time: "5:00 PM",
    title: "Opening Ceremony",
    description: "Welcome note and event introduction.",
  },
  {
    time: "5:15 PM",
    title: "Jio Session",
    description: "Insights into telecom, innovation and digital platforms.",
  },
  {
    time: "5:45 PM",
    title: "Microsoft Session",
    description: "AI, cloud computing and software engineering careers.",
  },
  {
    time: "6:15 PM",
    title: "JPMorgan Session",
    description: "Technology in finance and corporate opportunities.",
  },
  {
    time: "6:45 PM",
    title: "Networking",
    description: "Interact with speakers and fellow students.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-background py-32 px-6">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
            Event Schedule
          </span>

          <h2 className="mt-6 text-5xl font-bold text-foreground">
            Event Timeline
          </h2>

          <p className="mt-4 text-zinc-400">
            A structured journey from campus to corporate.
          </p>
        </div>

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/10" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 h-12 w-12 rounded-full border border-blue-500 bg-background flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                </div>

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-blue-400 font-medium">
                    {item.time}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}