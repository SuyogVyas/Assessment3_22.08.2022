import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpDataService } from '../service/emp-data.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Srno:string|null = '';
  employeeList:any[] = [];
  constructor(private _route:ActivatedRoute, private _empService:EmployeeService,
   private _empDataService:EmpDataService) { }


  ngOnInit(): void {
    this.Srno = this._route.snapshot.paramMap.get('Srno');
    this.employeeList = this._empService.getSelectedData(this.Srno);
    
  }

  saveEmployee(form:NgForm)
  {
    console.log(form)
  }

}
