import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { DashboardCreateModalComponent } from './dashboard-create-modal/dashboard-create-modal.component';
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { countryReducer } from '../store/reducers/country.reducer';
import { CountryEffects } from '../store/effects/country.effect';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardTableComponent,
    DashboardChartComponent,
    DashboardCreateModalComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    StoreModule.forRoot({ country: countryReducer }),
    EffectsModule.forRoot([CountryEffects]),
    BaseChartDirective,
  ],
  exports:[    
    DashboardTableComponent,
    DashboardChartComponent,
    DashboardCreateModalComponent]
})
export class DashboardModule { }
