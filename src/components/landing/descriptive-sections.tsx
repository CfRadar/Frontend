import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { Palette, Share2, Gem } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: "Intuitive Design Studio",
    description: "Our easy-to-use editor lets you upload artwork, add text, and play with colors to create the perfect T-shirt design in minutes.",
  },
  {
    icon: <Gem className="w-8 h-8 text-accent" />,
    title: "Premium Quality Prints",
    description: "We use high-quality materials and printing techniques to ensure your designs look sharp, feel great, and last long.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-accent" />,
    title: "Sell Your Creations",
    description: "Easily set up a storefront, share your designs on social media, and start selling your custom T-shirts to a global audience.",
  },
];

export function DescriptiveSections() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent">
              Create. Print. Sell.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Everything you need to bring your T-shirt ideas to life is right here.
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
