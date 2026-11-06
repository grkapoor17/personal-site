import Link from "next/link";
import { site } from "@/data/site";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
];

export function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-6 sm:px-6">
      <Link href="/" className="font-semibold">
        {site.name}
      </Link>
      <nav className="flex gap-5 text-sm text-muted">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-foreground">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
