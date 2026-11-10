export default function SectionHeading({
  eyebrow,
  title,
  onDark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <span
        className={`inline-block rounded-full border-2 px-4 py-1 text-xs font-bold uppercase tracking-wider ${
          onDark ? "border-vedcream text-vedcream" : "border-vednavy text-vednavy"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}