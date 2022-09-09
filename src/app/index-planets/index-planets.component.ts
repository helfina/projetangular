import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.css']
})
export class IndexPlanetsComponent implements OnInit {
  detailsPlanets: any = [];
  planets: any = [];
  terrains:  any = [];
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getPlanets()
  }
  getPlanets() {
    this.httpService
      .get('https://swapi.dev/api/planets')
      .subscribe(planets => {
        this.detailsPlanets = planets;
        if (this.detailsPlanets.next != null) {

          let countPages = Math.ceil(this.detailsPlanets.count / 10);

          for (let index = 1; index <= countPages; index++) {
            this.httpService.get('https://swapi.dev/api/planets/?page=' + index).subscribe(pageOfPlanets => {
              this.detailsPlanets = pageOfPlanets;
              console.log(this.detailsPlanets)
              this.detailsPlanets.results.forEach((result: any) => {
                this.planets = this.planets.concat(result);

              });
            });
          }

        } else {

          this.detailsPlanets.results.forEach((result: any) => {
            this.planets = result;
          });
        }
      });
  }
}
