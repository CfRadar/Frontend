"use client";

import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";

export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20">
            <div style={{position: 'relative', width: '100%', height: '0px', paddingBottom: '56.250%'}}>
              <iframe
                allow="autoplay"
                height="100%"
                src="https://streamable.com/e/gxammj?autoplay=1&muted=1&controls=0"
                width="100%"
                style={{border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden'}}
              ></iframe>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1}}></div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
