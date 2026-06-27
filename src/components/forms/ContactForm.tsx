import { Mail, Phone } from "lucide-react";

const inputClassName =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function ContactForm() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-navy-light p-8 sm:p-12">
        <form className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                Imię i nazwisko
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className={inputClassName}
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label
                htmlFor="contact-company"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                Firma
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                className={inputClassName}
                placeholder="Nazwa firmy"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                E-mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className={inputClassName}
                placeholder="jan@firma.pl"
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                Telefon
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                className={inputClassName}
                placeholder="+48 000 000 000"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-sm font-medium text-white/70"
            >
              Opis projektu
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className={inputClassName}
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
