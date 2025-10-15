import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <div className="relative z-20 container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-primary">
            Wear Your Imagination
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            The ultimate platform to design, print, and sell custom T-shirts. Effortlessly bring your ideas to life.
          </p>
           <div className="mt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105">
                Start Designing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
