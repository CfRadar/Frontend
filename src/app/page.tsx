import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { VideoSection } from "@/components/landing/video-section";
import { DescriptiveSections } from "@/components/landing/descriptive-sections";
import { CtaSection } from "@/components/landing/cta-section";
import { CustomizationSection } from "@/components/landing/customization-section";
import { EditorSection } from "@/components/landing/editor-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
        <DescriptiveSections />
        <CustomizationSection />
        <EditorSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
