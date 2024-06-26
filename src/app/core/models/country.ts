export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      fra: {
        official: string;
        common: string;
      };
    };
  };
  currencies: {
    XPF: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  altSpellings?: string[];
  region: string;
  subregion?: string;
  languages?: {
    fra: string;
  };
  population: number;
  timezones: string[];
  continents: string[];
  startOfWeek: string;
  postalCode: {
    format: string;
    regex: string;
  };
}