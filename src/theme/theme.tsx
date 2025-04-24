export type Theme = {
  colors: {
    primary: {
      t50: string;
      t100: string;
      t200: string;
      t300: string;
      t400: string;
      t500: string;
      t600: string;
      t700: string;
      t800: string;
      t900: string;
    };
    neutrals: {
      Neutrals0: string;
      Neutrals100: string;
      Neutrals200: string;
      Neutrals400: string;
      Neutrals500: string;
      Neutrals700: string;
      Neutrals900: string;
    };
    Purple: {
      Purple50: string;
      Purple200: string;
      Purple500: string;
      Purple700: string;
    };
    text: {
      t50: string;
      t100: string;
      t150: string;
      t200: string;
      t300: string;
      t400: string;
      t500: string;
      t600: string;
      t700: string;
      t800: string;
      t900: string;
    };
    accent: string;
    mono: string;
  };
};

export const Pallet: Theme = {
  colors: {
    primary: {
      t50: "#E9FBF2",
      t100: "#D4F7E6",
      t200: "#A9EFCC",
      t300: "#7EE7B3",
      t400: "#53DF99",
      t500: "#26D07C",
      t600: "#38A69D",
      t700: "#38a68d",
      t800: "#02A117",
      t900: "#082B1A",
    },
    neutrals: {
      Neutrals0: "#FFFFFF",
      Neutrals100: "#EEF0F5",
      Neutrals200: "#CDD1D9",
      Neutrals400: "#A8ADB7",
      Neutrals500: "#6D6F73",
      Neutrals700: "#393A3C",
      Neutrals900: "#202326",
    },
    Purple: {
      Purple50: "#EECFFC",
      Purple200: "#F8ECFE",
      Purple500: "#7B1FA2",
      Purple700: "#580F78",
    },
    text: {
      t50: "#F6F9F9",
      t100: "#E1E6EA",
      t150: "#D1D9E0",
      t200: "#C2CCD6",
      t300: "#A4B3C1",
      t400: "#8699AC",
      t500: "#678098",
      t600: "#536679",
      t700: "#3E4D5B",
      t800: "#29333D",
      t900: "#151A1E",
    },
    accent: "#FFD700",
    mono: "#FFF",
  },
};
