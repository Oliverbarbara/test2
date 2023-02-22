import { formatDate } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { lastValueFrom, Observable } from 'rxjs';
const URL = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';
@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent {
  dataSource: any;

  customersData: any;

  shippersData: any;

  refreshModes: string[];

  refreshMode: string;

  requests: string[] = [];

  constructor(private http: HttpClient) {
    this.refreshMode = 'reshape';
    this.refreshModes = ['full', 'reshape', 'repaint'];

    this.dataSource = new CustomStore({
      key: 'OrderID',
      load: () => this.sendRequest(`${URL}/Orders`),
      insert: (values) => this.sendRequest(`${URL}/InsertOrder`, 'POST', {
        values: JSON.stringify(values),
      }),
      update: (key, values) => this.sendRequest(`${URL}/UpdateOrder`, 'PUT', {
        key,
        values: JSON.stringify(values),
      }),
      remove: (key) => this.sendRequest(`${URL}/DeleteOrder`, 'DELETE', {
        key,
      }),
    });

    this.customersData = {
      paginate: true,
      store: new CustomStore({
        key: 'Value',
        loadMode: 'raw',
        load: () => this.sendRequest(`${URL}/CustomersLookup`),
      }),
    };

    this.shippersData = new CustomStore({
      key: 'Value',
      loadMode: 'raw',
      load: () => this.sendRequest(`${URL}/ShippersLookup`),
    });
  }

  sendRequest(url: string, method = 'GET', data: any = {}): any {
    this.logRequest(method, url, data);

    const httpParams = new HttpParams({ fromObject: data });
    const httpOptions = { withCredentials: true, body: httpParams };
    let result;

    switch (method) {
      case 'GET':
        result = this.http.get(url, httpOptions);
        break;
      case 'PUT':
        result = this.http.put(url, httpParams, httpOptions);
        break;
      case 'POST':
        result = this.http.post(url, httpParams, httpOptions);
        break;
      case 'DELETE':
        result = this.http.delete(url, httpOptions);
        break;
    }

    return lastValueFrom(result as any)
      .then((data: any) => (method === 'GET' ? data.data : data))
      .catch((e) => {
        throw e && e.error && e.error.Message;
      });
  }

  logRequest(method: string, url: string, data: object): void {
    const args = ''

    const time = formatDate(new Date(), 'HH:mm:ss', 'en-US');

    this.requests.unshift([time, method, url.slice(URL.length), args].join(' '));
  }

  clearRequests() {
    this.requests = [];
  }
}

