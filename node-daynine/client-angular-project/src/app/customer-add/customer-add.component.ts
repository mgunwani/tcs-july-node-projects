import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customer: any = {
    "name": "johnSmith",
    "amount": "20000"
  };

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this._httpClient.post('http://localhost:3000/customers', this.customer).subscribe(result => {
      alert('Customer Added')
      console.log(result);
    }, (err) => { console.log(err) })
  }

}
