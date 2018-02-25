import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Employee } from '../models/employee';
import { Project } from '../models/project';
import { EmployeeService } from '../services/employee.service';
import { Subscriber } from 'rxjs';
import { ProjectService } from '../services/project.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  items: MenuItem[];
  index: number = 0;

  employee: Employee = new Employee();
  employeeList: Employee[] = [];

  projects: Project[] = [];

  constructor(
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.employee.firstName = '';
    this.employee.lastName = '';
    this.employee.projects = [];
    this.items = [
      { label: 'Basic Info', url: 'employee/basicinfo' },
      { label: 'Projects', url: 'employee/projects' }
    ];

    var today = new Date();

    this.getAllEmployees();
    this.getAllProjects();
  }


  getAllEmployees() {
    this.employeeService.getAll()
      .subscribe((res: Employee[]) => {
        console.log(res);
        this.employeeList = res;
      });
  }

  getById(id: number) {
    this.employeeService.getById(id)
      .subscribe((res: Employee) => {
        this.employee = res;
        this.projects = this.employee.projects;
      })
  }

  loadEmployeeProjects(event) {
    this.getById(event.data.id);
    console.log("hello");
  }

  loadEmployeeDetails(event) {
    this.getById(event.data.id);
    console.log("hello");
  }

  onCreate() {
    this.employeeService.getById(this.employee.id)
      .subscribe((res: Employee) => {
        if (res.id == null) {
          this.employeeService.createEmployee(this.employee)
            .subscribe((res: Employee) => {
              this.employee = res;
              this.getAllEmployees();
            })
        } else {
          this.messageService.add({ severity: 'error', summary: 'System Message', detail: 'An user with this ID already exists' });
        }
      },
        error => {
          console.log(error);
        });
  }

  onEdit() {
    this.employeeService.getById(this.employee.id)
      .subscribe((res: Employee) => {
        if (res.id != null) {
          this.employeeService.updateEmployee(this.employee)
            .subscribe((res: Employee) => {
              this.employee = res;
              this.getAllEmployees();
            })
        } else {
          this.messageService.add({ severity: 'error', summary: 'System Message', detail: 'There is no user with this ID to edit' });
        }

        this.projects = this.employee.projects;
      },
      error => {
        console.log(error);
      });

  }

  getAllProjects() {
    this.projectService.getAll()
      .subscribe((res: Project[]) => {
        this.projects = res;
      })
  }

}
