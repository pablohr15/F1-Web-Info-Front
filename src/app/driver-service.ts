import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Driver } from "./driver";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class DriverService {

    private baseUrl = "http://localhost:8080/drivers";

    constructor(private httpClient: HttpClient){}

    getDrivers():Observable<Driver[]> {
        return this.httpClient.get<Driver[]>(`${this.baseUrl}`);
    }

    getDriverById(id:number):Observable<Driver> {
        return this.httpClient.get<Driver>(`${this.baseUrl}/${id}`);
    }

}
