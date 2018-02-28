import { Injectable } from '@angular/core';
// import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Response, HttpModule } from "@angular/http";
// import { HttpClientModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Employee } from '../models/employee';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmployeeService {

    url: string = 'http://localhost:3000/employees';

    constructor(
        private http: HttpClient
    ) { }

    // getAll(): Observable<Employee[]> {
    //     return this.http.get(this.url)
    //         .map((res: Response) => {
    //             let result = res;
    //             return result;
    //         });


    // }
    // : Observable<Employee[]> 
    getAll() {
        return this.http.get<Employee[]>(this.url)
            .map((data: Employee[]) => {
                return data;
            })


    }

    getById(id: number){
        return this.http.get(this.url + '/' + id)
            .map((res: Employee) => {
                let result = res;
                if (result.dateOfBirth) {
                    result.dateOfBirth = new Date(result.dateOfBirth);
                }
                return result;
            })
    }

    // getById(id: number): Observable<Employee> {
    //     return this.http.get(this.url + '/' + id)
    //         .map((res: Response) => {
    //             let result = res.json() as Employee;
    //             if (result.dateOfBirth) {
    //                 result.dateOfBirth = new Date(result.dateOfBirth);
    //             }
    //             return result;
    //         })
    // }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post(this.url, employee)
            .map((res: Employee) => {
                return res;
            });
    }

    // createEmployee(employee: Employee): Observable<Employee> {
    //     return this.http.post(this.url, employee)
    //         .map((res: Response) => {
    //             return res.json() as Employee;
    //         });
    // }

    // updateEmployee(employee: Employee): Observable<Employee> {
    //     return this.http.put(this.url + '/' + employee.id, employee)
    //         .map((res: Response) => {
    //             return res.json() as Employee;
    //         });
    // }

    updateEmployee(employee: Employee) {
        return this.http.put(this.url + '/' + employee.id, employee)
            .map((res: Employee) => {
                let result = res;
                if (result.dateOfBirth) {
                    result.dateOfBirth = new Date(result.dateOfBirth);
                }
                return result;
            });
    }

    // deleteEmployee(id: string): Observable<void> {
    //     return this.http.delete(this.url + '/' + id)
    //         .map((res: Response) => {
    //             return;
    //         });
    // }

}