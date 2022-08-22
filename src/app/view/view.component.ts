import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDataService } from '../service/emp-data.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employeeList:any[] = [];
  Srno:string|null = '';

  constructor(private _route:ActivatedRoute,private _empService:EmployeeService
    ,private _empDataService:EmpDataService) { }

  ngOnInit(): void { 
    this.Srno = this._route.snapshot.paramMap.get('Srno');
    this.employeeList = this._empService.getSelectedData(this.Srno);
    console.log(this.employeeList)
  }

}
