import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Country } from 'src/app/core/models/country';
import { loadCountries, loadCountriesFailure, loadCountriesSuccess } from '../actions/country.action';

@Injectable()
export class CountryEffects {
    loadCountries$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCountries),
            mergeMap(() =>
                this.http.get<Country[]>('https://restcountries.com/v3.1/all').pipe(
                    map(countries => loadCountriesSuccess({ countries })),
                    catchError(error => of(loadCountriesFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private http: HttpClient) {}
}