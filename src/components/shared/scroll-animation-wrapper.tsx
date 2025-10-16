"use client";

import type { ReactNode } from "react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollAnimationWrapper({
  children,
  className,
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIntersecting(true);
            if(ref.current) {
                observer.unobserve(ref.current);
            }
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isIntersecting
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-95",
        className
      )}
    >
      {children}
    </div>
  );
}
