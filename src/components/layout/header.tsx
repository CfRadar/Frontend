import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const NavLink = ({ children, href, hasDropdown = false }: { children: React.ReactNode, href?: string, hasDropdown?: boolean }) => {
  const content = (
    <span className="flex items-center gap-1 hover:text-foreground transition-colors">
      {href ? <Link href={href}>{children}</Link> : children}
      {hasDropdown && <ChevronDown className="h-4 w-4" />}
    </span>
  );

  if (hasDropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{content}</DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem><Link href="#">T-Shirts</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="#">Hoodies</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="#">Sweatshirts</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return content;
};


export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 px-4 md:px-8 z-30 bg-neutral-900/50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tighter text-foreground animate-fade-in-down">
            Monkey Prints
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <NavLink hasDropdown>Mens</NavLink>
          <NavLink hasDropdown>Womens</NavLink>
          <NavLink hasDropdown>Kids</NavLink>
        </nav>
        <div className="flex items-center gap-4">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
