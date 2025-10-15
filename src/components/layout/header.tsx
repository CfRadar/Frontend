import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 px-4 md:px-8 z-30 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tighter text-foreground">
            Artifex
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Designs</Link>
        </nav>
        <div className="flex items-center gap-4">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
