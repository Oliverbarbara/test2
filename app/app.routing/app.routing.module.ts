import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { FormComponent } from '../form/form.component';
import { ChartComponent } from '../charts/chart.component';
import { CrudTableComponent } from '../crud-table/crud-table.component';


const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: DashboardComponent
  },

  {
    path: 'table',
    component: TableComponent
  },

  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'crud-table',
    component: CrudTableComponent
  },

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports:[RouterModule]
})
export class AppRoutingModule { }
