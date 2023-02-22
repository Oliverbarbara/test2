import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing/app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ChartComponent } from './charts/chart.component';
import { DxButtonModule, DxChartModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    TableComponent,
    FormComponent,
    ChartComponent,
    CrudTableComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,

    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DxChartModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxButtonModule,
    HttpClientModule,
  ],
  exports: [FormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
