import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <ul className="space-y-2 text-sm text-white/60">
              <li>Wyszukiwanie dostawców</li>
              <li>Audyty fabryk</li>
              <li>Kontrola jakości</li>
              <li>Spedycja i logistyka</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Strony
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kalkulator" className="text-white/60 hover:text-white">
                  Kalkulator transportu
                </Link>
              </li>
              <li>
                <Link href="/konsultacja" className="text-white/60 hover:text-white">
                  Umów konsultację
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/60 hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>kontakt@china-export.pl</li>
              <li>+48 000 000 000</li>
              <li>Warszawa, Polska</li>
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
