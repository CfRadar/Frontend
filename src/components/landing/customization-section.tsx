import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CustomizationSection() {
  const customizationImage = PlaceHolderImages.find(
    (img) => img.id === "customization-image"
  );

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollAnimationWrapper>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              {customizationImage && (
                <Image
                  src={customizationImage.imageUrl}
                  alt={customizationImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={customizationImage.imageHint}
                />
              )}
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={150}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent">
                Endless Customization
              </h2>
              <p className="mt-4 text-muted-foreground">
                Your vision, your shirt. With our powerful tools, you have complete creative control. Mix and match colors, upload your own graphics, and add unique text. Our platform makes it simple to create a T-shirt that is truly one-of-a-kind.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
