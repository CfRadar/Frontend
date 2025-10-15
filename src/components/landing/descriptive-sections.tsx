import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { PenTool, Share2, Target } from "lucide-react";

const features = [
  {
    icon: <PenTool className="w-8 h-8 text-accent" />,
    title: "Craft Your Narrative",
    description: "Build a stunning visual story that captures your essence. Our platform makes it easy to arrange and present your work in a compelling, cinematic flow.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-accent" />,
    title: "Seamless Sharing",
    description: "Share your portfolio with a single link. Embed it on your website, share on social media, or send it directly to clients and collaborators.",
  },
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: "Engage Your Audience",
    description: "Move beyond static images. With auto-playing video, you create an immersive experience that holds attention and leaves a lasting impression.",
  },
];

export function DescriptiveSections() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent">
              Bring Your Work to Life
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Discover the features that make Monkey Prints the ultimate tool for modern creatives.
            </p>
        </ScrollAnimationWrapper>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 150}>
              <div className="text-center h-full p-6 border border-border rounded-lg bg-card hover:bg-secondary/50 transition-all hover:border-primary/30 hover:scale-105 duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
