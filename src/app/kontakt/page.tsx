import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Strona główna
      </Link>

      <div className="rounded-2xl border border-white/10 bg-navy-light p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-white">Wyślij zapytanie</h1>
        <p className="mt-4 text-white/60">
          Opisz swój projekt importu — produkt, ilość, harmonogram i preferowany
          zakres usług. Odpowiemy w ciągu 24 godzin roboczych.
        </p>

        <form className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/70">
                Imię i nazwisko
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-white/70">
                Firma
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Nazwa firmy"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/70">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="jan@firma.pl"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/70">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="+48 000 000 000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
              Opis projektu
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Produkt, ilość, harmonogram, preferowany zakres usług..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light sm:w-auto"
          >
            Wyślij zapytanie
          </button>
        </form>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            kontakt@china-export.pl
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" />
            +48 000 000 000
          </span>
        </div>
      </div>
    </div>
  );
}
