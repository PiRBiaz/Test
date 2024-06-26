import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart, registerables } from 'chart.js';
import { EMPTY, Observable } from 'rxjs';
import { Country } from 'src/app/core/models/country';
import { loadCountries } from 'src/app/store/actions/country.action';
import { CountryState } from 'src/app/store/reducers/country.reducer';
import { selectAllCountries } from 'src/app/store/selectors/country.selector';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent implements OnInit, OnDestroy {
  countries$: Observable<Country[]> = EMPTY;
  countryNames: string[] = [];
  populations: number[] = [];
  regions: string[] = [];
  currencies: string[] = [];

  constructor(private store: Store<{ country: CountryState }>) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    //to move inside app.comp.ts
    this.store.dispatch(loadCountries());
    this.countries$ = this.store.select(selectAllCountries);

    this.countries$.subscribe((countries) => {

      this.regions = countries.map((country) => country.region);

      //other idea of graph.
      this.currencies = countries.map((country) =>
        Object.keys(country.currencies).join(', ')
      );
      this.countryNames = countries.map((country) => country.name.common);
      this.populations = countries.map((country) => country.population);
    });
    if (this.regions) {
      this.createRegionDistributionChart();

    }
  }
 
  createRegionDistributionChart() {
      const regionCount = this.regions.reduce((count:any, region) => {
        count[region] = (count[region] || 0) + 1;
        return count;
      }, {});
      
      const regionLabels = Object.keys(regionCount);
      const regionData = Object.values(regionCount);
  
      const canvas = document.getElementById('regionChart') as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'pie',
            data: {
              labels: regionLabels,
              datasets: [{
                label: 'Regions',
                data: regionData,
                backgroundColor: regionLabels.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`),
                borderColor: regionLabels.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`),
                borderWidth: 1
              }]
            },
            options: {
              responsive: true
            }
          });
        } else {
          console.error('Failed to get 2D context for region chart.');
        }
      } else {
        console.error('Failed to find region chart canvas.');
      }
    }

    ngOnDestroy(): void {
      // Unsubscribe countries
    }
}
