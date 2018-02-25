import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeBasicInfoComponent } from './employee/employee-basic-info/employee-basic-info.component';
import { EmployeeProjectsComponent } from './employee/employee-projects/employee-projects.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/basicinfo', component: EmployeeBasicInfoComponent },
  { path: 'employee/projects', component: EmployeeProjectsComponent },
  { path: 'projects', component: ProjectsComponent}  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }