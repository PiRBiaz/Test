import { createReducer, on } from '@ngrx/store';
import { loadCountries, loadCountriesFailure, loadCountriesSuccess } from '../actions/country.action';
import { Country } from 'src/app/core/models/country';

export interface CountryState {
    countries: Country[];
    error: any;
}

export const initialState: CountryState = {
    countries: [],
    error: null,
};

export const countryReducer = createReducer(
    initialState,
    on(loadCountries, state => ({ ...state })),
    on(loadCountriesSuccess, (state, { countries }) => ({ ...state, countries })),
    on(loadCountriesFailure, (state, { error }) => ({ ...state, error }))
);