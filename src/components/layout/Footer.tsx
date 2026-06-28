import { LogisticsBackdrop } from "@/components/backgrounds/LogisticsBackdrop";
import { navGroups } from "@/config/navigation";
import Link from "next/link";

const footerLinkClassName =
  "text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

const footerServices =
  navGroups.find((group) => group.label === "Usługi")?.items.filter(
    (item) => item.serviceId,
  ) ?? [];

const footerPages =
  navGroups.find((group) => group.label === "Narzędzia")?.items ?? [];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-navy py-12">
      <LogisticsBackdrop variant="footer" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
                CN
              </div>
              <span className="text-sm font-semibold text-white">
                China Export
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Import towarów, maszyn i materiałów z Chin do Polski i Europy.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Usługi
            </h3>
            <ul className="space-y-2 text-sm">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Strony
            </h3>
            <ul className="space-y-2 text-sm">
              {footerPages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:kontakt@china-export.pl"
                  className={footerLinkClassName}
                >
                  kontakt@china-export.pl
                </a>
              </li>
              <li>
                <a href="tel:+48000000000" className={footerLinkClassName}>
                  +48 000 000 000
                </a>
              </li>
              <li className="text-white/60">Warszawa, Polska</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} China Export. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
