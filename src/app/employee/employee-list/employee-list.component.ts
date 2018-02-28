import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

  @Input()
  employeeList: Employee[];

  @Input()
  employee: Employee;

  @Output() rowClick: EventEmitter<string> = new EventEmitter<string>();

  onRowClick(event) {
      this.rowClick.emit(event.data.id)
  }

  onLazyLoadEmployees(event) {
    this.getAllEmployees(event);
  }

  getAllEmployees(event) {
    this.employeeService.getAll()
      .subscribe((res: Employee[]) => {
        this.employeeList = res;
      });
  }

}
