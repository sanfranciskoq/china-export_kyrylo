import { Calendar } from "lucide-react";

const inputClassName =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function ConsultationForm() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-navy-light p-8 sm:p-12">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Calendar className="h-7 w-7" />
        </div>

        <form className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="consultation-name"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                Imię i nazwisko
              </label>
              <input
                id="consultation-name"
                name="name"
                type="text"
                required
                className={inputClassName}
              />
            </div>
            <div>
              <label
                htmlFor="consultation-email"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                E-mail
              </label>
              <input
                id="consultation-email"
                name="email"
                type="email"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="consultation-topic"
              className="mb-1.5 block text-sm font-medium text-white/70"
            >
              Temat konsultacji
            </label>
            <select
              id="consultation-topic"
              name="topic"
              className={inputClassName}
            >
              <option value="sourcing">Wyszukiwanie dostawcy</option>
              <option value="audit">Audyt fabryki</option>
              <option value="logistics">Logistyka i transport</option>
              <option value="full">Pełny proces importu</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="consultation-notes"
              className="mb-1.5 block text-sm font-medium text-white/70"
            >
              Krótki opis (opcjonalnie)
            </label>
            <textarea
              id="consultation-notes"
              name="notes"
              rows={3}
              className={inputClassName}
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
  );
}
