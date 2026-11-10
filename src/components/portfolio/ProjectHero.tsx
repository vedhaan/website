import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectImage from "@/components/home/ProjectImage";
import type { Project } from "@/data/projects";

const tilts = [
    "-rotate-1",
    "rotate-1",
    "-rotate-[0.5deg]",
    "rotate-[1.5deg]",
    "-rotate-[1deg]",
];


export default function ProjectHero({ project }: { project: Project }) {
    const info = [
        { label: "Client", value: project.client },
        { label: "Category", value: project.category },
        { label: "Year", value: project.year },
        ...(project.duration
            ? [{ label: "Duration", value: project.duration }]
            : []),
    ];

    return (
        <>
            <Section tone="cream" className="bg-dots pb-16 pt-36 sm:pt-44">
                <Container>
                    <Reveal>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4 transition-colors hover:text-vedmagenta"
                        >
                            <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
                            All projects
                        </Link>
                    </Reveal>

                    <div className="mt-8 grid items-center gap-14 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <Reveal delay={0.05}>
                                <span className="inline-block rounded-full border-2 border-vednavy bg-vedcreamdeep px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                                    {project.category}
                                </span>
                            </Reveal>
                            <Reveal delay={0.12}>
                                <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
                                    {project.title}
                                </h1>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="mt-6 max-w-xl text-lg leading-relaxed text-vednavy/80">
                                    {project.summary}
                                </p>
                            </Reveal>
                            <Reveal delay={0.28}>
                                <div className="mt-9 flex flex-wrap gap-4">
                                    <Button href="/contact">
                                        Start a similar project <ArrowUpRight />
                                    </Button>
                                    {project.liveUrl && (
                                        <Button href={project.liveUrl} external variant="secondary">
                                            Visit live site <ArrowUpRight />
                                        </Button>
                                    )}
                                </div>
                            </Reveal>
                        </div>

                        <div className="lg:col-span-5">
                            <Float amp={9} duration={5}>
                                <div className="relative mx-auto aspect-square w-full max-w-md rotate-2 overflow-hidden rounded-3xl border-2 border-vednavy bg-vedcreamdeep shadow-hard-lg transition-transform duration-500 hover:rotate-0">
                                    <ProjectImage
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        label={project.title}
                                        fallback="bg-vedorange"
                                        sizes="(min-width: 1024px) 460px, 90vw"
                                        priority
                                    />
                                </div>
                            </Float>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section tone="deep" compact>
                <Container>
                    <div
                        className={`grid grid-cols-2 gap-5 ${project.duration ? "lg:grid-cols-5" : "lg:grid-cols-4"
                            }`}
                    >
                        {info.map((item, i) => (
                            <Reveal key={item.label} delay={i * 0.06}>
                                <div
                                    className={`h-full rounded-2xl border-2 border-vednavy bg-white p-5 shadow-hard transition-transform duration-300 hover:rotate-0 ${tilts[i]}`}
                                >
                                    <div className="text-xs font-bold uppercase tracking-wider text-vednavy/60">
                                        {item.label}
                                    </div>
                                    <div className="mt-2 font-display text-xl font-extrabold leading-tight">
                                        {item.value}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                        <Reveal delay={0.18}>
                            <div
                                className={`h-full rounded-2xl border-2 border-vednavy bg-white p-5 shadow-hard transition-transform duration-300 hover:rotate-0 ${tilts[info.length]}`}
                            >
                                <div className="text-xs font-bold uppercase tracking-wider text-vednavy/60">
                                    Tech
                                </div>
                                <ul className="mt-2 flex flex-wrap gap-1.5">
                                    {project.tech.map((t) => (
                                        <li
                                            key={t}
                                            className="rounded-full border-2 border-vednavy bg-vedorange px-2.5 py-0.5 text-xs font-bold"
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>
        </>
    );
}