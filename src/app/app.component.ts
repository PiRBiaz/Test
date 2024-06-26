import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryState } from './store/reducers/country.reducer';
import { loadCountries } from './store/actions/country.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<{ country: CountryState }>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadCountries());

  }

}
