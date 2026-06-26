import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { FormPageShell } from "@/components/layout/FormPageShell";

export default function KonsultacjaPage() {
  return (
    <FormPageShell>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Strona główna
      </Link>

      <div className="rounded-2xl border border-white/10 bg-navy-light p-8 sm:p-12">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Calendar className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold text-white">Umów konsultację</h1>
        <p className="mt-4 text-white/60">
          Bezpłatna 30-minutowa rozmowa z naszym specjalistą ds. importu.
          Omówimy Twój projekt, ryzyka i rekomendowany plan działania.
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
              />
            </div>
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
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-white/70">
              Temat konsultacji
            </label>
            <select
              id="topic"
              name="topic"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="sourcing">Wyszukiwanie dostawcy</option>
              <option value="audit">Audyt fabryki</option>
              <option value="logistics">Logistyka i transport</option>
              <option value="full">Pełny proces importu</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-white/70">
              Krótki opis (opcjonalnie)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Czego dotyczy projekt?"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light sm:w-auto"
          >
            Umów konsultację
          </button>
        </form>

        <p className="mt-6 text-xs text-white/30">
          Po wysłaniu formularza skontaktujemy się, aby ustalić termin rozmowy.
          Integracja z Calendly może zostać dodana później.
        </p>
      </div>
      </div>
    </FormPageShell>
  );
}
