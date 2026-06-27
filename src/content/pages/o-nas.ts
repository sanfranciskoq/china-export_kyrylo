import type { DedicatedPageContent } from "./types";

export const oNasPage: DedicatedPageContent = {
  id: "o-nas",
  meta: {
    title: "O nas — China Export",
    description:
      "China Export łączy biuro w Warszawie z zespołem operacyjnym w Chinach. Import towarów, maszyn i materiałów do Polski i Europy.",
  },
  hero: {
    eyebrow: "Kim jesteśmy",
    title: "Most między rynkiem chińskim a Twoją firmą w Europie",
    lead: "Od 2012 roku wspieramy importerów w Polsce, Niemczech i Czechach. Nie jesteśmy pośrednikiem z katalogu — jesteśmy operatorem, który bierze odpowiedzialność za każdy etap.",
  },
  sections: [
    {
      title: "Warszawa i Chiny — jeden zespół",
      body: "Biuro w Warszawie koordynuje projekty, komunikację i logistykę w Europie. W Chinach pracuje zespół ds. sourcingu, audytów, kontroli jakości i eksportu. Dzięki temu nie polegamy na przypadkowych agentach — mamy własną obecność na miejscu.",
      bullets: [
        "Siedziba operacyjna: Warszawa, Polska",
        "Biura terenowe: Shenzhen, Yiwu, Ningbo",
        "Komunikacja w języku polskim, angielskim i mandaryńskim",
      ],
    },
    {
      title: "Dlaczego klienci zostają z nami",
      body: "Większość współprac zaczyna się od jednego modułu — np. audytu fabryki lub pierwszej wysyłki próbnej. Gdy widzą, jak pracujemy, powierzają kolejne etapy. Nie wiążemy umową długoterminową — zostajesz, bo proces działa.",
      bullets: [
        "Modułowa współpraca bez sztywnego pakietu",
        "Weryfikacja dostawcy przed płatnością",
        "Pełna dokumentacja zgodna z wymogami UE",
      ],
    },
  ],
  highlights: [
    { label: "Lat doświadczenia", value: "12+" },
    { label: "Wysyłek miesięcznie", value: "120+" },
    { label: "Średnia ocena", value: "4,9" },
    { label: "Zweryfikowanych opinii", value: "240+" },
  ],
  cta: {
    primary: { label: "Poznaj nasz zespół w Chinach", href: "/zespol-w-chinach" },
    secondary: { label: "Wyślij zapytanie", href: "/kontakt" },
  },
};
