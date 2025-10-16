"use client";

import type { ReactNode } from "react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
};

export function ScrollAnimationWrapper({
  children,
  className,
  delay = 0,
  animation,
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
        threshold: 0.2,
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

  const defaultAnimation = "transition-all duration-700 ease-out";
  const intersectingState = animation ? '' : 'opacity-100 translate-y-0 scale-100';
  const nonIntersectingState = animation ? 'opacity-0' : 'opacity-0 translate-y-5 scale-95';


  return (
    <div
      ref={ref}
      className={cn(
        defaultAnimation,
        isIntersecting
          ? `${intersectingState} ${animation}`
          : nonIntersectingState,
        className
      )}
    >
      {children}
    </div>
  );
}
