"use client";

import { Briefcase, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Briefcase,
    title: "Industry Exposure",
    description:
      "Understand real-world corporate environments and expectations.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with professionals and fellow ambitious students.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Learn about internships, placements and future opportunities.",
  },
  {
    icon: Award,
    title: "Expert Insights",
    description:
      "Hear directly from leaders working at top companies.",
  },
];

export default function WhyAttend() {
  return (
    <section className="bg-background py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-foreground">
            Why Attend?
          </h2>

          <p className="mt-4 text-zinc-400">
            More than an event — an opportunity to accelerate your career.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                "
              >
                <Icon className="h-10 w-10 text-blue-500" />

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}