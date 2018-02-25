import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project: Project = new Project();
  projects: Project[] = [];

  list: SelectItem[];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.list = [    
      { label: 'Active', value: '1' },
      { label: 'Passive', value: '2' }
    ];

    this.getAllProjects();
  }

  onCreate() {
    this.projectService.createEmployee(this.project)
      .subscribe((res: Project) => {
        this.project = res;
        this.getAllProjects();
      })
  }

  onEdit() {
    this.projectService.getById(this.project.id)
      .subscribe((res: Project) => {
        if (res.id != null) {
          this.projectService.updateEmployee(this.project)
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
        this.projects = res;
      })
  }

  getById(id: number) {
    this.projectService.getById(id)
      .subscribe((res: Project) => {
        this.project = res;
      })
  }

  onRowClick(event) {
    this.getById(event.data.id);
    console.log("hello");
  }

}
