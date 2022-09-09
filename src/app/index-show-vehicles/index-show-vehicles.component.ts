import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index-show-vehicles',
  templateUrl: './index-show-vehicles.component.html',
  styleUrls: ['./index-show-vehicles.component.css']
})
export class IndexShowVehiclesComponent implements OnInit {
  detailVehicles: any = [];
  vehicles: any = [];
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getVehicles();

  }
  getVehicles() {
    this.httpService
      .get('https://swapi.dev/api/vehicles')
      .subscribe(vehicles => {
        this.detailVehicles = vehicles;
        if (this.detailVehicles.next != null) {

          let countPages = Math.ceil(this.detailVehicles.count / 10);

          for (let index = 1; index <= countPages; index++) {
            this.httpService.get('https://swapi.dev/api/vehicles/?page=' + index).subscribe(pageOfVehicles => {
              this.detailVehicles = pageOfVehicles;
              console.log(this.detailVehicles)
              this.detailVehicles.results.forEach((result: any) => {
                this.vehicles = this.vehicles.concat(result);

              });
            });
          }

        } else {

          this.detailVehicles.results.forEach((result: any) => {
            this.vehicles = result;
          });
        }
      });
  }
}
