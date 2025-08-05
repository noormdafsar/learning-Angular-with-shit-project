import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IAPIResponseModel, IRole } from '../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export default class RolesComponent implements OnInit {

  public roleList : IRole [] = [];

  constructor(private _http: HttpClient){

  }

  ngOnInit(): void {
    this.getAllRoles();
    alert("This is Angular Live Cycle/Hook...! press on 'ok' to see role component");
  }

  // will uncomment when api will get ready, for now i used mock data defined below this function

  // getAllRoles(){
  //   this._http.get<IAPIResponse>("https://nooruddin-md-afsar.com/api/").subscribe({
  //     next:(response) => {
  //       if(response.result){
  //         this.roleList = response.data;
  //       }
  //       else{
  //         console.error("Failed to load All role Api", response.result);
  //       }
  //     },
  //     error: (error) =>{
  //       console.error("Error Loading get all roles api data", error);
  //     }
  //   })
  // }

  getAllRoles(): void {
    this.roleList = [
      {
        roleId: 1,
        role: "Admin"
      },
      {
        roleId: 2,
        role: "Manager"
      },
      {
        roleId: 3,
        role: "Developer"
      },
      {
        roleId: 4,
        role: "QA Engineer"
      },
      {
        roleId: 5,
        role: "Product Engineer"
      }
    ]
  }

 firstName: string = "Nooruddin";
 lastName: string = "Md Afsar"
 age: number = 24;
 isActive: boolean = true;
 currentDate: Date = new Date();
 Role: string = "software engineer";
 inputType: string =  "checkbox";
 state: string = "West Bengal";
 selectedRoleId: number = 1;

 showAlertMessageWithoutParameter(){
  alert("This is my function without parameter, okay!")
 }

 showAlertMessageWithParameter(message: string){
  alert("This is my fucntion with parameter, Okay!");
 }

 get selectedRoleName(): string{
  const selected = this.roleList.find(r => r.roleId == this.selectedRoleId);
  return selected? selected.role: '';
 }
 
}
