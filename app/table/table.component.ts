import { Component } from '@angular/core';
export interface table {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {


   ELEMENT_DATA: table[] = [
    {position: 1, name: 'Bitcoin', weight: 153.4091, symbol: 'BTC'},
    {position: 2, name: 'Ethereum', weight: 4.0026, symbol: 'ETH'},
    {position: 3, name: 'Tether', weight: 6.941, symbol: 'USDT'},
    {position: 4, name: 'BNB', weight: 9.0122, symbol: 'BNB'},
    {position: 5, name: 'USD Coin', weight: 10.811, symbol: 'USDC'},
    {position: 6, name: 'XRP', weight: 12.0107, symbol: 'XRP'},
    {position: 7, name: 'Binance', weight: 14.0067, symbol: 'BUSD'},
    {position: 8, name: 'Cardono', weight: 15.9994, symbol: 'ADA'},
    {position: 9, name: 'DogeCoin', weight: 18.9984, symbol: 'DOGE'},
    {position: 10, name: 'Polugon', weight: 20.1797, symbol: 'MATIC'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
}
