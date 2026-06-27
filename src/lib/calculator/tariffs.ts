import type { ContainerTariff } from "./types";

export const TARIFF_LAST_UPDATED = "2026-06-27";

export const CONTAINER_TARIFFS: Record<string, ContainerTariff> = {
  sea20: {
    label: "Morze 20 ft",
    origin: 650,
    main: 3900,
    dest: 850,
    last: 700,
    days: "40-60 dni",
  },
  sea40: {
    label: "Morze 40 ft",
    origin: 700,
    main: 4900,
    dest: 950,
    last: 850,
    days: "40-60 dni",
  },
  sea40hc: {
    label: "Morze 40 HC",
    origin: 700,
    main: 5150,
    dest: 950,
    last: 850,
    days: "40-60 dni",
  },
  rail20: {
    label: "Kolej 20 ft",
    origin: 650,
    main: 4400,
    dest: 850,
    last: 650,
    days: "16-25 dni",
  },
  rail40: {
    label: "Kolej 40 HQ",
    origin: 700,
    main: 6550,
    dest: 950,
    last: 850,
    days: "16-25 dni",
  },
};

export const TRANSPORT_SCALE_MIN = 0.85;
export const TRANSPORT_SCALE_MAX = 1.15;

export const VAT_RATE = 0.23;
export const BROKER_BASE_PLN = 250;
export const BROKER_EXTRA_CN_PLN = 20;
export const INSURANCE_MIN_USD = 50;
export const INSURANCE_RATE = 0.005;

export const VARIABLE_TRANSPORT_MODES = ["sealcl", "raillcl", "air"] as const;
