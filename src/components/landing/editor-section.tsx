import Image from "next/image";
import { ScrollAnimationWrapper } from "@/components/shared/scroll-animation-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function EditorSection() {
  const editorImage = PlaceHolderImages.find(
    (img) => img.id === "editor-image"
  );
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollAnimationWrapper className="md:order-2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              {editorImage && (
                <Image
                  src={editorImage.imageUrl}
                  alt={editorImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={editorImage.imageHint}
                />
              )}
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={150} className="md:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent">
                Powerful Built-in Editor
              </h2>
              <p className="mt-4 text-muted-foreground">
                No design experience? No problem. Our intuitive drag-and-drop editor is packed with features to help you create professional-looking designs. Access a library of fonts, graphics, and effects to make your T-shirt stand out.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
