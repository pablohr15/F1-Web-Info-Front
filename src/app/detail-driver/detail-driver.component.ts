import { Component } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-driver',
  templateUrl: './detail-driver.component.html',
  styleUrls: ['./detail-driver.component.css']
})
export class DetailDriverComponent {

  id:number;
  driver:Driver;

  constructor(private driverService:DriverService, private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.driverService.getDriverById(this.id).subscribe(driver => {
          this.driver = driver;
        });
  }

  

}
