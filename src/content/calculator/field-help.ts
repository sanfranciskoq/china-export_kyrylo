import type { Incoterm } from "@/lib/calculator";

export const calculatorFormIntro =
  "Najedź lub kliknij (?) przy polu, jeśli nie wiesz co wpisać.";

export const fieldHelp = {
  goods: {
    default:
      "Wpisz kwotę z faktury proforma lub oferty dostawcy. Przy EXW i FOB to cena samego towaru — bez transportu i cła.",
    cif: "Wpisz kwotę z faktury CIF — cena towaru już z transportem morskym do portu docelowego. Nie dodawaj frachtu osobno.",
  },
  currency:
    "Waluta, w której wystawiona jest faktura od chińskiego dostawcy. Najczęściej USD lub EUR.",
  mode: "Wybierz sposób wysyłki. Cały kontener (20/40 ft) = duża regularna dostawa. LCL = mniejsza ilość w współdzielonym kontenerze. Lotniczy = szybko, ale drożej. Nie wiesz? Wybierz LCL morski.",
  cbm: "Objętość zapakowanego towaru w metrach sześciennych. Znajdziesz ją na liście pakowej (packing list) albo oblicz: długość × szerokość × wysokość w metrach.",
  kg: "Waga całego ładunku z opakowaniem i paletami, w kilogramach. Na liście pakowej szukaj „gross weight” lub „waga brutto”.",
  incoterm:
    "Warunki dostawy — sprawdź na fakturze proforma. EXW = odbiór z fabryki w Chinach. FOB = dostarczone do portu w Chinach. CIF = cena obejmuje transport morski do portu docelowego.",
  cnCodes:
    "Ile różnych rodzajów towarów jest w przesyłce. Jeden produkt → wpisz 1. Mix produktów → liczba różnych kodów celnych. Nie znasz kodu? Zostaw 1 — to orientacyjna wycena.",
  duty: "Podatek celny od importu — zależy od rodzaju produktu. Jeśli nie znasz stawki, wybierz „Nie znam” — zobaczysz trzy scenariusze: 0%, 5% i 10%.",
  customDuty:
    "Wpisz stawkę cła z bazy TARIC lub podaną przez brokera celnego, np. 3,5%.",
  usdPln:
    "Kurs wymiany dolara na złotówkę. Domyślnie pobierany automatycznie z NBP (tabela A). Możesz go zmienić ręcznie.",
  eurPln:
    "Kurs wymiany euro na złotówkę. Domyślnie pobierany automatycznie z NBP (tabela A). Możesz go zmienić ręcznie.",
  insurance: {
    default:
      "Ubezpieczenie ładunku na czas transportu — 0,5% wartości towaru, minimum 50 USD. Zazwyczaj warto je doliczyć.",
    cif: "Przy CIF ubezpieczenie jest już wliczone w cenę towaru — nie trzeba dodawać osobno.",
  },
} as const;

export const resultHelp = {
  totalCash:
    "Szacunkowa kwota, jaką musisz mieć dostępną na start importu — łącznie z VAT, cłem, transportem i obsługą celną.",
  landed:
    "Pełny koszt importu bez VAT. Dla czynnego podatnika VAT można go odliczyć — stąd ta kwota jest pokazana osobno.",
  transport:
    "Koszt przewozu z Chin do Polski oraz obsługi po stronie docelowej. Przy CIF międzynarodowy fracht jest już w cenie towaru.",
  customsValue:
    "Wartość, od której urząd celny liczy cło i VAT. Zależy od wybranego incotermu i ceny towaru.",
  duty: "Podatek celny — procent od wartości celnej. Stawka zależy od kodu CN/TARIC produktu.",
  vat: "Podatek VAT 23% od importu. Czynny podatnik VAT może go odliczyć w rozliczeniu.",
  broker:
    "Koszt obsługi przez agencję celną — odprawa dokumentów. 250 PLN za pierwszy kod CN + 20 PLN za każdy dodatkowy.",
} as const;

export function getGoodsHelp(incoterm: Incoterm): string {
  return incoterm === "CIF" ? fieldHelp.goods.cif : fieldHelp.goods.default;
}

export function getInsuranceHelp(incoterm: Incoterm): string {
  return incoterm === "CIF"
    ? fieldHelp.insurance.cif
    : fieldHelp.insurance.default;
}
