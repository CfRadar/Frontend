import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10"></div>
       <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="relative z-20 container mx-auto px-4 pt-16">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-primary">
            Unleash Your Digital Identity
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Monkey Prints offers a revolutionary way to showcase your creative work through dynamic, auto-playing video portfolios.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

const styles = `
.bg-grid-pattern {
    background-image:
        linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
        linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
    background-size: 40px 40px;
}
`;

// Inject styles into the head
if (typeof window !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}