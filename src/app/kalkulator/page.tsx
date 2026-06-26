import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";

export default function KalkulatorPage() {
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
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Calculator className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold text-white">Kalkulator transportu</h1>
        <p className="mt-4 text-white/60">
          Moduł kalkulatora frachtu morskiego i lotniczego — w przygotowaniu.
          Wkrótce będziesz mógł oszacować koszt transportu na podstawie wagi,
          objętości, portu załadunku i miejsca dostawy.
        </p>
        <div className="mt-8 rounded-xl border border-dashed border-white/20 p-6 text-center text-sm text-white/40">
          Formularz kalkulatora pojawi się tutaj
        </div>
        <Link
          href="/kontakt"
          className="mt-8 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light"
        >
          Wyślij zapytanie o wycenę
        </Link>
      </div>
    </div>
  );
}
