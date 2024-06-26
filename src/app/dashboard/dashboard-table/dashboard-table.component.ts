import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef } from 'ag-grid-community';
import { EMPTY, Observable } from 'rxjs';
import { Country } from 'src/app/core/models/country';
import { loadCountries } from 'src/app/store/actions/country.action';
import { CountryState } from 'src/app/store/reducers/country.reducer';
import { selectAllCountries } from 'src/app/store/selectors/country.selector';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent {
  countries$: Observable<Country[]> = EMPTY;
  columnDefs: ColDef[] = [
    { field: 'name.common', headerName: 'Common Name' },
    { field: 'name.official', headerName: 'Official Name' },
    { field: 'population', headerName: 'Population' },
    { field: 'region', headerName: 'Region' },
    { field: 'currencies.XPF.name', headerName: 'Currency Name' },
    { field: 'currencies.XPF.symbol', headerName: 'Currency Symbol' }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  constructor(private store: Store<{ country: CountryState }>) {
  }

  ngOnInit(): void {
        //to move inside app.comp.ts

    this.store.dispatch(loadCountries());

    this.countries$ = this.store.select(selectAllCountries);
  }





}
