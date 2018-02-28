import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectsListComponent
  ]
})
export class ProjectsModule { }
