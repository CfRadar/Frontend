import { Fingerprint } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 px-4 md:px-8 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Fingerprint className="h-8 w-8 text-primary group-hover:animate-pulse" />
          <span className="text-xl font-bold text-foreground">
            Monkey Prints
          </span>
        </Link>
        {/* Navigation can be added here */}
      </div>
    </header>
  );
}
