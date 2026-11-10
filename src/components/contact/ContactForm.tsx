"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowUpRight, Check, Star } from "@/components/ui/icons";
import { services } from "@/data/services";
import { budgets } from "@/data/contact";
import { features, site } from "@/data/site";


type Values = {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "success" | "error";

const MAX = 1000;
const empty: Values = { name: "", email: "", phone: "", budget: "", message: "" };
const confettiColors = ["#f77b24", "#ea5580", "#b14b90", "#d45b64", "#0f0f1a"];

const card =
  "relative rounded-[2rem] border-2 border-vednavy bg-white p-6 shadow-[10px_10px_0_#f77b24] sm:p-10";

const emailOk = (v: string) => /^\S+@\S+\.\S+$/.test(v.trim());

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border-2 bg-vedcream px-4 py-3 text-base font-medium outline-none transition focus:bg-white focus:shadow-[4px_4px_0_#f77b24] ${hasError ? "border-vedred" : "border-vednavy"
    }`;
}

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!emailOk(v.email)) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim()))
    e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10)
    e.message = "Please tell us a little more (at least 10 characters).";
  return e;
}

function StepTitle({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange font-display text-sm font-extrabold">
        {n}
      </span>
      <h3 className="font-display text-xl font-extrabold">{children}</h3>
    </div>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">
        {label}
        {required ? (
          <span className="text-vedred"> *</span>
        ) : (
          <span className="font-medium text-vednavy/50"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm font-bold text-vedred">
          {error}
        </p>
      )}
    </div>
  );
}

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <motion.button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.94 }}
      animate={{ scale: on ? [1, 1.1, 1] : 1 }}
      transition={{ duration: 0.25 }}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-vednavy px-4 py-2 text-sm font-bold transition-colors duration-200 ${on
        ? "bg-vedorange shadow-[3px_3px_0_#0f0f1a]"
        : "bg-vedcream hover:bg-vedcreamdeep"
        }`}
    >
      {on && <Check className="h-3 w-3" />}
      {children}
    </motion.button>
  );
}

function Confetti() {
  const [pieces] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      angle: (i / 24) * Math.PI * 2 + Math.random() * 0.4,
      dist: 120 + Math.random() * 130,
      rot: Math.random() * 540 - 270,
      color: confettiColors[i % confettiColors.length],
      size: 8 + Math.random() * 8,
      round: i % 3 === 0,
    })),
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-28 h-0 w-0"
    >
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block border border-vednavy"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.round ? "9999px" : "3px",
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: Math.cos(p.angle) * p.dist,
            y: Math.sin(p.angle) * p.dist + 40,
            opacity: [1, 1, 0],
            scale: 1,
            rotate: p.rot,
          }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function ContactForm() {
  const params = useSearchParams();
  const [values, setValues] = useState<Values>(empty);
  const [selected, setSelected] = useState<string[]>(() => {
    const s = params.get("service");
    return s && services.some((x) => x.slug === s) ? [s] : [];
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [sentName, setSentName] = useState("");
  const [shake, setShake] = useState(false);

  const done = [
    values.name.trim().length >= 2,
    emailOk(values.email),
    values.message.trim().length >= 10,
  ].filter(Boolean).length;

  function set<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function toggle(slug: string) {
    setSelected((s) =>
      s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug],
    );
  }

  function reset() {
    setValues(empty);
    setSelected([]);
    setErrors({});
    setStatus("idle");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const honeypot = String(new FormData(e.currentTarget).get("_gotcha") ?? "");

    const found = validate(values);
    setErrors(found);
    const invalid = Object.keys(found) as (keyof Values)[];
    if (invalid.length > 0) {
      setShake(true);
      document.getElementById(`cf-${invalid[0]}`)?.focus();
      return;
    }

    if (honeypot) {
      setSentName(values.name);
      setStatus("success");
      return;
    }

    if (site.formspreeId === "YOUR_FORM_ID") {
      console.error("Add your Formspree form ID in src/data/site.ts");
      setErrorMsg("The form is not available right now.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const titles = services
      .filter((s) => selected.includes(s.slug))
      .map((s) => s.title)
      .join(", ");

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New website inquiry from ${values.name.trim()}`,
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          budget: values.budget,
          services: titles,
          message: values.message.trim(),
        }),
      });

      if (res.ok) {
        setSentName(values.name.trim());
        setStatus("success");
        return;
      }

      const data = await res.json().catch(() => null);
      setErrorMsg(
        data?.errors?.[0]?.message ?? "Something went wrong while sending.",
      );
      setStatus("error");
    } catch {
      setErrorMsg("We could not reach the server. Check your connection.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`${card} text-center`}
      >
        <Confetti />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange shadow-hard"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-12 w-12"
            fill="none"
            stroke="#0f0f1a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <motion.path
              d="M5 12l5 5L20 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </svg>
        </motion.div>
        <h2 className="mt-8 font-display text-4xl font-extrabold">
          Thank you{sentName ? `, ${sentName.split(" ")[0]}` : ""}!
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-vednavy/80">
          We have received your message and will get back to you. If it is
          urgent, call us on {site.contact.phone}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            href={features.portfolio ? "/portfolio" : "/services"}
            variant="secondary"
          >
            {features.portfolio ? "See our work" : "Our services"} <ArrowUpRight />
          </Button>
          <Button onClick={reset}>Send another message</Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      noValidate
      className={card}
      animate={shake ? { x: [0, -10, 10, -8, 8, -4, 0] } : { x: 0 }}
      transition={{ duration: 0.45 }}
      onAnimationComplete={() => setShake(false)}
    >
      <Star className="absolute -right-3 -top-5 h-9 w-9 animate-spin-slow text-vedmagenta" />

      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
        Tell us about your project
      </h2>
      <p className="mt-2 text-base text-vednavy/70">
        Fill in the form and we will get back to you.
      </p>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs font-bold">
          <span>
            {done === 3
              ? "All set. Ready to send."
              : `${done} of 3 required fields complete`}
          </span>
          <span aria-hidden="true">{Math.round((done / 3) * 100)}%</span>
        </div>
        <div
          role="progressbar"
          aria-label="Form completion"
          aria-valuemin={0}
          aria-valuemax={3}
          aria-valuenow={done}
          className="mt-2 h-3 overflow-hidden rounded-full border-2 border-vednavy bg-vedcream"
        >
          <motion.div
            className="h-full bg-vedorange"
            animate={{ width: `${(done / 3) * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <div className="mt-10">
        <StepTitle n={1}>About you</StepTitle>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="cf-name" label="Your name" required error={errors.name}>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "cf-name-error" : undefined}
              className={inputClass(Boolean(errors.name))}
            />
          </Field>

          <Field id="cf-email" label="Email" required error={errors.email}>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "cf-email-error" : undefined}
              className={inputClass(Boolean(errors.email))}
            />
          </Field>

          <div className="sm:col-span-2">
            <Field id="cf-phone" label="Phone" error={errors.phone}>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "cf-phone-error" : undefined}
                className={inputClass(Boolean(errors.phone))}
              />
            </Field>
          </div>
        </div>
      </div>

      <fieldset className="mt-10">
        <legend className="sr-only">What you need</legend>
        <StepTitle n={2}>What do you need?</StepTitle>
        <div className="flex flex-wrap gap-2.5">
          {services.map((s) => (
            <Chip
              key={s.slug}
              on={selected.includes(s.slug)}
              onClick={() => toggle(s.slug)}
            >
              {s.title}
            </Chip>
          ))}
        </div>

        <p className="mb-3 mt-7 text-sm font-bold">
          Budget range{" "}
          <span className="font-medium text-vednavy/50">(optional)</span>
        </p>
        <div className="flex flex-wrap gap-2.5">
          {budgets.map((b) => (
            <Chip
              key={b}
              on={values.budget === b}
              onClick={() => set("budget", values.budget === b ? "" : b)}
            >
              {b}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div className="mt-10">
        <StepTitle n={3}>Your message</StepTitle>
        <Field id="cf-message" label="Tell us about your idea" required error={errors.message}>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            maxLength={MAX}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "cf-message-error" : undefined}
            className={`${inputClass(Boolean(errors.message))} resize-y`}
          />
          <div
            className={`mt-2 text-right text-xs font-bold ${values.message.length > MAX * 0.9 ? "text-vedred" : "text-vednavy/50"
              }`}
          >
            {values.message.length}/{MAX}
          </div>
        </Field>
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 rounded-2xl border-2 border-vednavy bg-vedcoral p-4 text-sm font-bold"
        >
          {errorMsg || "Something went wrong."} You can also call{" "}
          {site.contact.phone} or email {site.contact.email}.
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M12 3a9 9 0 1 0 9 9" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send message <ArrowUpRight />
            </>
          )}
        </Button>
        <span className="text-xs text-vednavy/60">
          Fields marked * are required. By sending this form you agree to our{" "}
          <Link href="/privacy" className="font-bold underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </motion.form>
  );
}