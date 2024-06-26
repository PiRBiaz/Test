import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountryState } from "../reducers/country.reducer";

export const selectCountryState = createFeatureSelector<CountryState>('country');

export const selectAllCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.countries
);

export const selectCountryError = createSelector(
    selectCountryState,
    (state: CountryState) => state.error
);