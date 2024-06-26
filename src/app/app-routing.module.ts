import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTableComponent } from './dashboard/dashboard-table/dashboard-table.component';
import { DashboardChartComponent } from './dashboard/dashboard-chart/dashboard-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard-table', pathMatch: 'full' },
  { path: 'dashboard-table', component: DashboardTableComponent },
  { path: 'dashboard-chart', component: DashboardChartComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
