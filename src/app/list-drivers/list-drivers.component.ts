import { Component } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent {

  drivers:Driver[];
  driver:Driver;

  constructor(private driverService:DriverService, private router:Router) {}

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this.driverService.getDrivers().subscribe(data => {
      this.drivers = data;
    })
  }

  getDriverById(id:number){
    console.log("Hola");
    this.driverService.getDriverById(id).subscribe(data => {
      this.driver = data;
      console.log(this.driver);
    })
  }

  detailDriver(id:number){
    this.router.navigate(['drivers', id]);
  }

}
