"use client";

/* eslint-disable @next/next/no-img-element */
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { clients, clientsContent } from "@/data/home";
import type { Client } from "@/data/home";

const ease = [0.22, 1, 0.36, 1] as const;
const tilts = ["-rotate-1", "rotate-1", "rotate-0", "rotate-2", "-rotate-2"];

const shapes = [
  { kind: "circle", pos: "left-[3%] top-[14%]", color: "bg-vedpink", size: "h-4 w-4", dur: 6, delay: 0 },
  { kind: "square", pos: "right-[4%] top-[18%]", color: "bg-vedorange", size: "h-4 w-4", dur: 7, delay: 1 },
  { kind: "plus", pos: "left-[6%] bottom-[10%]", color: "text-vedmagenta", size: "", dur: 5, delay: 2 },
  { kind: "circle", pos: "right-[6%] bottom-[12%]", color: "bg-vedcoral", size: "h-5 w-5", dur: 6.5, delay: 1.5 },
];

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -inset-6 animate-dots bg-dots" />

      <motion.div
        className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-vedorange/15"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-vedmagenta/10"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
        style={{ animationDuration: "100s" }}
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#0f0f1a"
          strokeWidth="0.3"
          strokeDasharray="1.5 3"
          opacity="0.3"
        />
      </svg>

      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.pos}`}
          animate={{ y: [0, -14, 0], rotate: [0, 360] }}
          transition={{
            y: { duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: s.dur * 3, repeat: Infinity, ease: "linear" },
          }}
        >
          {s.kind === "circle" && (
            <span className={`block rounded-full border-2 border-vednavy ${s.size} ${s.color}`} />
          )}
          {s.kind === "square" && (
            <span className={`block rounded-md border-2 border-vednavy ${s.size} ${s.color}`} />
          )}
          {s.kind === "plus" && (
            <span className={`block font-display text-3xl font-extrabold leading-none ${s.color}`}>
              +
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function Logo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  if (!client.logo || failed) {
    return (
      <span className="px-1 text-center font-display text-xs font-extrabold leading-tight sm:text-sm">
        {client.name}
      </span>
    );
  }

  return (
    <img
      src={client.logo}
      alt={client.name}
      onError={() => setFailed(true)}
      className="max-h-full max-w-full object-contain"
    />
  );
}

function Tile({
  client,
  i,
  active,
}: {
  client: Client;
  i: number;
  active: boolean;
}) {
  const body = (
    <div
      style={{
        animationDelay: `${(i % 5) * 0.25 + Math.floor(i / 5) * 0.4}s`,
      }}
      className="animate-tile-bob"
    >
      <div
        className={`flex aspect-[3/2] items-center justify-center rounded-2xl border-2 border-vednavy p-3 transition-all duration-300 hover:z-10 hover:rotate-0 hover:scale-110 hover:bg-vedcreamdeep ${tilts[i % tilts.length]} ${
          active
            ? "z-10 scale-110 bg-vedcreamdeep shadow-[5px_5px_0_#f77b24]"
            : "bg-white shadow-[3px_3px_0_#0f0f1a]"
        }`}
      >
        <Logo client={client} />
      </div>
    </div>
  );

  if (client.url) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={client.name}
        className="block"
      >
        {body}
      </a>
    );
  }
  return body;
}

export default function Clients() {
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { margin: "-80px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce || !inView || clients.length < 2) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % clients.length),
      1400,
    );
    return () => clearInterval(t);
  }, [reduce, inView]);

  if (clients.length === 0) return null;

  const words = clientsContent.title.split(" ");
  const head = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");

  return (
    <Section tone="cream" compact>
      <Backdrop />

      <Container className="relative z-10">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            {head && <>{head} </>}
            <span className="relative inline-block -rotate-1 px-3 pb-0.5">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 origin-left rounded-2xl border-2 border-vednavy bg-vedorange"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: 0.3, ease }}
              />
              <span className="relative">{tail}</span>
            </span>
          </h2>
        </Reveal>

        <div
          ref={gridRef}
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 15,
                delay: (i % 5) * 0.06 + Math.floor(i / 5) * 0.08,
              }}
              className="w-[calc((100%_-_1.5rem)/3)] sm:w-[calc((100%_-_3rem)/4)] lg:w-[calc((100%_-_4rem)/5)]"
            >
              <Tile client={c} i={i} active={active === i} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}