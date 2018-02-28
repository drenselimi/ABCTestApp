import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent implements OnInit {

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  @Input()
  projectList: Project[];

  @Output() rowClick: EventEmitter <string> = new EventEmitter<string>();

  onRowClick(event) {
      this.rowClick.emit(event.data.id)
  }
}
