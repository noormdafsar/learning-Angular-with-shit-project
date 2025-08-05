import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IDesignation } from '../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  public designation: IDesignation[] = [];

  constructor(private _masterService: MasterService){ }

  ngOnInit(): void {
    alert("This is Angular Life Cycle/Hook, click on 'OK' to see designation data")
    this.getDesignationDetails();
  }

  // this._masterService.getDesignationDetails().subscribe({
  //   next: (response) =>{
  //     if(response.result){
  //       this.designation = response.data;
  //     }
  //     else{
  //       console.error('Failed to load Designation api details', response.message)
  //     }
  //   },
  //   error: (error) =>{
  //     console.error("Error loading designation details", error);
  //   }
  // })

  getDesignationDetails(){
    this.designation = [
      {
        designationId : 1,
        designationName : "UI/UX Designer",
      },
      {
        designationId : 2,
        designationName : "Mobile Developer",
      },
      {
        designationId : 3,
        designationName : "Blockchain Developer",
      },
      {
        designationId : 4,
        designationName : "AI/ML Engineer"
      },
    ]
  }
  
}
