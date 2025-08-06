import { Component, OnInit } from '@angular/core';
import { IClient } from '../model/interface/client';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  constructor( private _http: HttpClient ) { }

  ngOnInit(): void {
    this.getClientData();
  }

  public clientData: IClient[] = [];


  getClientData(){
    this.clientData = [
      {
        clientId: 1,
        clientName: "Rahul Kumar",
        companyName: "ABC Pvt Ltd",
        address: "123 Main St, City, Country",
        contactNo: 1231231234
      },
      {
        clientId: 2,
        clientName: "Sita Sharma",
        companyName: "XYZ Ltd",
        address: "456 Elm St, City, Country",
        contactNo: 7867867867
      },
      {
        clientId: 3,
        clientName: "Neha Singh",
        companyName: "Tech Innovations",
        address: "789 Oak St, City, Country",
        contactNo: 4564564567
      },
      {
        clientId: 4,
        clientName: "Rajesh Gupta",
        companyName: "Global Solutions",
        address: "321 Pine St, City, Country",
        contactNo: 3213213210
      },
    ]
  }
}
