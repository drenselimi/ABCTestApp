import { Injectable } from '@angular/core';
// import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, Response, HttpModule } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Employee } from '../models/employee';
import { Project } from '../models/project';


@Injectable()
export class EmployeeService {

    url: string = 'http://localhost:3000/employees';

    constructor(
        private http: Http
    ) { }

    getAll(): Observable<Employee[]> {
        return this.http.get(this.url)
            .map((res: Response) => {
                return res.json() as Employee[];
            });
    }

    getById(id: number): Observable<Employee> {
        return this.http.get(this.url + '/' + id)
            .map((res: Response) => {
                return res.json() as Employee;
            })
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post(this.url, employee)
            .map((res: Response) => {
                return res.json() as Employee;
            });
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put(this.url + '/' + employee.id, employee)
            .map((res: Response) => {
                return res.json() as Employee;
            });
    }

    // deleteEmployee(id: string): Observable<void> {
    //     return this.http.delete(this.url + '/' + id)
    //         .map((res: Response) => {
    //             return;
    //         });
    // }

}