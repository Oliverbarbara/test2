import {Component} from '@angular/core';
import { ChartService, Population } from './chart.service';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
})

export class ChartComponent {
    populationData: Population[];

  constructor(service: ChartService) {
    this.populationData = service.getPopulationData();
  }
}