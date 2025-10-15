export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 md:px-8 mt-16 border-t border-border/50">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {currentYear} Monkey Prints. All rights reserved.</p>
      </div>
    </footer>
  );
}
