import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/25 border border-accent/20",
  secondary:
    "bg-white/10 hover:bg-white/15 text-white border border-white/30 backdrop-blur-sm",
  tertiary:
    "bg-transparent hover:bg-white/5 text-white/80 hover:text-white border border-transparent underline-offset-4 hover:underline",
};

type ButtonProps = {
  variant?: ButtonVariant;
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
