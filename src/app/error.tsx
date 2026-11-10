"use client";

import { useEffect } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section tone="cream" className="bg-dots pb-28 pt-44">
      <Container className="text-center">
        <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-vednavy/80">
          An unexpected error stopped this page from loading. Please try again,
          and if it keeps happening, contact us.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </Container>
    </Section>
  );
}