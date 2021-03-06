import { Injectable } from '@angular/core';
// import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, Response, HttpModule } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Project } from '../models/project';


@Injectable()
export class ProjectService {

    url: string = 'http://localhost:3000/projects';

    constructor(
        private http: Http
    ) { }

    getAll(): Observable<Project[]> {
        return this.http.get(this.url)
            .map((res: Response) => {
                return res.json() as Project[];
            });
    }

    getById(id: number): Observable<Project> {
        return this.http.get(this.url + '/' + id)

            .map((res: Response) => {
                let result = res.json() as Project;

                if (result.startDate) {
                    result.startDate = new Date(result.startDate);
                }
                if (result.endDate) {
                    result.endDate = new Date(result.endDate);
                }
                return result;
            })
    }

    createProject(project: Project): Observable<Project> {
        return this.http.post(this.url, project)
            .map((res: Response) => {
                return res.json() as Project;
            });
    }

    updateProject(project: Project): Observable<Project> {
        return this.http.put(this.url + '/' + project.id, project)
            .map((res: Response) => {
                return res.json() as Project;
            });
    }

}