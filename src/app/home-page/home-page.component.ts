import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  characters: any = [];
  planets: any = [];
  vehicles: any = [];

  constructor(private httpService: HttpClient) {
  }

  ngOnInit(): void {
    this.getCharacters();
    this.getPlanets();
    this.getVehicles();
  }

  getCharacters() {

    this.httpService
      .get('https://swapi.dev/api/people')
      .subscribe(peoples => {
        this.characters = peoples;
      });
  }

  getPlanets() {
    this.httpService
      .get('https://swapi.dev/api/planets')
      .subscribe(planets => {
        this.planets = planets;
      });
  }

  getVehicles() {
    this.httpService
      .get('https://swapi.dev/api/vehicles')
      .subscribe(vehicles => {
        this.vehicles = vehicles;
      });
  }
}
