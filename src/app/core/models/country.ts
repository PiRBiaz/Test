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
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        XPF: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        fra: string;
    };

    landlocked: boolean;
    area: number;
    demonyms: {
        eng: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
    postalCode: {
        format: string;
        regex: string;
    };
}