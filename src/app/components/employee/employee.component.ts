import { Component, OnInit } from '@angular/core';
import { IEmpoyee } from '../model/interface/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  public employeeData: IEmpoyee[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getEmployeeData();
  }


  getEmployeeData() {
    this.employeeData = [
      {
        employeeId: 1,
        employeeName: "Rajdeep Senapati",
        companyName: "Tech Solutions",
        address: "123 Tech Lane, Silicon Valley, CA",
        contactNo: 3579518523
      },
      {
        employeeId: 2,
        employeeName: "Rahul Kumar",
        companyName: "Innovatech",
        address: "456 Innovation Drive, New York, NY",
        contactNo: 1234567890
      },
      {
        employeeId: 3,
        employeeName: "Anushka Verma",
        companyName: "Global Enterprises",
        address: "789 Global St, London, UK",
        contactNo: 1122334455
      },
      {
        employeeId: 4,
        employeeName: "Isha Fatma",
        companyName: "Future Tech",
        address: "321 Future Ave, Tokyo, Japan",
        contactNo: 9898989895
      },
    ];
  }
}
