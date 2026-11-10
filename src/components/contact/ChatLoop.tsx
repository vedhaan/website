"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Float from "@/components/ui/Float";
import { Star } from "@/components/ui/icons";

const prompts = [
  "I need a new website for my business",
  "Can you build a CRM for my team?",
  "I want to automate our manual work",
  "We need branding and a logo",
  "I want to start digital marketing",
];

export default function ChatLoop() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<"user" | "dots" | "reply">("user");
  const prompt = prompts[i];

  useEffect(() => {
    if (reduce) return;
    let t: ReturnType<typeof setTimeout>;

    if (phase === "user") {
      t =
        chars < prompt.length
          ? setTimeout(() => setChars((c) => c + 1), 38)
          : setTimeout(() => setPhase("dots"), 350);
    } else if (phase === "dots") {
      t = setTimeout(() => setPhase("reply"), 1400);
    } else {
      t = setTimeout(() => {
        setI((x) => (x + 1) % prompts.length);
        setChars(0);
        setPhase("user");
      }, 2800);
    }

    return () => clearTimeout(t);
  }, [phase, chars, prompt.length, reduce]);

  const shown = reduce ? prompt.length : chars;
  const showPhase = reduce ? "reply" : phase;

  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <Float className="absolute -left-6 top-14" amp={12} duration={5}>
        <span className="block h-12 w-12 rounded-full border-2 border-vednavy bg-vedpink" />
      </Float>
      <Float className="absolute -right-4 bottom-16" amp={9} duration={4.5} delay={0.6}>
        <span className="block h-11 w-11 rotate-12 rounded-xl border-2 border-vednavy bg-vedcoral" />
      </Float>
      <Star className="absolute -right-3 -top-8 h-9 w-9 animate-spin-slow text-vedmagenta" />

      <Float amp={7} duration={6}>
        <div className="overflow-hidden rounded-3xl border-2 border-vednavy bg-white shadow-hard-lg">
          <div className="flex items-center gap-2 border-b-2 border-vednavy bg-vednavy px-4 py-3 text-vedcream">
            <span className="h-3 w-3 rounded-full bg-vedorange" />
            <span className="h-3 w-3 rounded-full bg-vedmagenta" />
            <span className="h-3 w-3 rounded-full bg-vedpink" />
            <span className="ml-3 font-display text-sm font-extrabold">
              Vedhaan Technology
            </span>
            <span className="ml-auto text-xs font-bold text-vedcream/60">
              New message
            </span>
          </div>

          <div className="flex min-h-[19rem] flex-col justify-end gap-4 bg-vedcreamdeep p-5">
            <div className="min-h-[3rem] max-w-[88%] self-end rounded-3xl rounded-br-md border-2 border-vednavy bg-white px-5 py-3 text-base font-medium shadow-hard">
              {prompt.slice(0, shown)}
              {!reduce && showPhase === "user" && (
                <span className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-[0.2em] animate-blink bg-vednavy" />
              )}
            </div>

            <div className="min-h-[3.5rem] max-w-[88%] self-start">
              <AnimatePresence mode="wait">
                {showPhase === "dots" && (
                  <motion.div
                    key="dots"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block rounded-3xl rounded-bl-md border-2 border-vednavy bg-vednavy px-5 py-4 shadow-[5px_5px_0_#ea5580]"
                  >
                    <span className="flex gap-1.5">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="block h-2.5 w-2.5 rounded-full bg-vedcream"
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: d * 0.15,
                          }}
                        />
                      ))}
                    </span>
                  </motion.div>
                )}
                {showPhase === "reply" && (
                  <motion.div
                    key="reply"
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl rounded-bl-md border-2 border-vednavy bg-vedorange px-5 py-3 text-base font-bold shadow-hard"
                  >
                    Tell us more. We would love to hear about it.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Float>
    </div>
  );
}