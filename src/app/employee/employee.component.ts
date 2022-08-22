import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _empService:EmployeeService,private _route:Router) { }

  employeeList: any[] = [];

  displayedColumns = ['Srno', 'FullName', 'emailid', 'Contact','Actions']


  ngOnInit(): void {

    this._empService.getEmpByApi().subscribe((empdata) => {
      this.employeeList = empdata
      console.log(this.employeeList)
    })
  
  }

  navigate(emp: any) {
    this._route.navigate(['/view', emp.Srno]);
  }

  editpage(emp: any) {
    
    this._route.navigate(['/edit',emp.Srno ]);
  }
  
  
}
