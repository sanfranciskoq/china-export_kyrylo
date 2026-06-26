export type CompanyStat = {
  id: string;
  value: string;
  label: string;
};

export const companyStats: CompanyStat[] = [
  {
    id: "experience",
    value: "12+",
    label: "Lat doświadczenia",
  },
  {
    id: "reviews",
    value: "240+",
    label: "Zweryfikowanych opinii",
  },
  {
    id: "rating",
    value: "4,9",
    label: "Średnia ocena",
  },
  {
    id: "shipments",
    value: "120+",
    label: "Wysyłek miesięcznie",
  },
];
