import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index-show-people',
  templateUrl: './index-show-people.component.html',
  styleUrls: ['./index-show-people.component.css']
})
export class IndexShowPeopleComponent implements OnInit {
  characters: any = [];
  peoples: any = [];
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(){

    this.httpService
      .get('https://swapi.dev/api/people')
      .subscribe(peoples => {
        this.characters = peoples;

        if(this.characters.next != null){

          let countPages = Math.ceil(this.characters.count / 10);

          for (let index = 1; index <= countPages; index++ ){
            this.httpService.get('https://swapi.dev/api/people/?page=' + index ).subscribe(pageOfPeople =>{
              this.characters = pageOfPeople;

              this.characters.results.forEach((result: any) =>
              {
                this.peoples = this.peoples.concat(result);

              });

            });


          }

        }else{

          this.characters.results.forEach((result: any) =>
          {
            this.peoples = result;
          });
        }
      });
  }
}
