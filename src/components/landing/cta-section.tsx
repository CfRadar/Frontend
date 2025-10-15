import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              Ready to Launch Your Brand?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Join Artifex today and start creating T-shirts that people will love.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105">
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
