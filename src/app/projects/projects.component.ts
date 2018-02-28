import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import { SelectItem } from 'primeng/primeng';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  actualYear: number = (new Date).getFullYear();

  today: any;
  project: Project = new Project();
  projectList: Project[] = [];

  list: SelectItem[];

  constructor(
    private projectService: ProjectService,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.today = new Date();
    this.list = [
      { label: 'Active', value: '1' },
      { label: 'Passive', value: '2' }
    ];

    this.getAllProjects();
  }

  loadProjectDetails(event) {
    this.getById(event);
  }

  onCreate() {
    if (this.project.endDate < this.today) {
      this.project.status = 'ACTIVE';
    } else if (this.project.endDate > this.today) {
      this.project.status = 'NOT_ACTIVE';
    }
    this.projectService.getById(this.project.id)
      .subscribe((res: Project) => {
        this.project = res;
        if (res.id == null) {
          this.projectService.createProject(this.project)
            .subscribe((res: Project) => {
              this.project = res;
              this.getAllProjects();
            })
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'System Message',
            detail: 'An user with this ID already exists'
          });
        }
      })


  }

  onEdit() {
    if (this.project.endDate < this.today) {
      this.project.status = 'ACTIVE';
    } else if (this.project.endDate > this.today) {
      this.project.status = 'NOT_ACTIVE';
    }
    this.projectService.getById(this.project.id)
      .subscribe((res: Project) => {
        if (res.id != null) {
          this.projectService.updateProject(this.project)
            .subscribe((res: Project) => {
              this.project = res;
              this.getAllProjects();
            })
        }
      })
  }

  getAllProjects() {
    this.projectService.getAll()
      .subscribe((res: Project[]) => {
        this.projectList = res;
      })
  }

  getById(id: number) {
    this.projectService.getById(id)
      .subscribe((res: Project) => {
        this.project = res;
        if (this.project.endDate < this.today) {
          this.project.status = 'ACTIVE';
        } else if (this.project.endDate > this.today) {
          this.project.status = 'NOT_ACTIVE';
        }
      })
  }

  onRowClick(event) {
    this.getById(event.data.id);
  }

}
