import { NextResponse } from "next/server";
import type { NbpRates } from "@/lib/calculator/types";

type NbpResponse = {
  code: string;
  rates: Array<{ mid: number; effectiveDate: string }>;
};

const DEFAULT_USD = 3.81;
const DEFAULT_EUR = 4.33;

async function fetchNbpRate(code: string): Promise<{ mid: number; effectiveDate: string } | null> {
  const response = await fetch(
    `https://api.nbp.pl/api/exchangerates/rates/a/${code.toLowerCase()}/?format=json`,
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as NbpResponse;
  const rate = data.rates[0];
  if (!rate) return null;

  return { mid: rate.mid, effectiveDate: rate.effectiveDate };
}

export async function GET() {
  try {
    const [usd, eur] = await Promise.all([fetchNbpRate("USD"), fetchNbpRate("EUR")]);

    const payload: NbpRates = {
      usdPln: usd?.mid ?? DEFAULT_USD,
      eurPln: eur?.mid ?? DEFAULT_EUR,
      effectiveDate: usd?.effectiveDate ?? eur?.effectiveDate ?? new Date().toISOString().slice(0, 10),
    };

    return NextResponse.json(payload);
  } catch {
    const payload: NbpRates = {
      usdPln: DEFAULT_USD,
      eurPln: DEFAULT_EUR,
      effectiveDate: new Date().toISOString().slice(0, 10),
    };

    return NextResponse.json(payload);
  }
}
