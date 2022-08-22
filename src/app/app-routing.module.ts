import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {path:'list',component:EmployeeComponent},
    {path:'view/:Srno',component:ViewComponent},
    {path:'edit/:Srno',component:EditComponent},
    {path:'',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
