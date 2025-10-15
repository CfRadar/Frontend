"use client";

import { useRef, useEffect } from "react";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(error => console.error("Video play failed:", error));
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      if(video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="rounded-lg overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://videos.pexels.com/video-files/853879/853879-hd_1280_720_24fps.mp4"
              muted
              loop
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
