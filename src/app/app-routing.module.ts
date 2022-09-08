import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {IndexShowPlanetComponent} from "./index-show-planet/index-show-planet.component";
import {IndexShowPeopleComponent} from "./index-show-people/index-show-people.component";
import {IndexShowVehiclesComponent} from "./index-show-vehicles/index-show-vehicles.component";

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'planets', component: IndexShowPlanetComponent},
  {path:'people', component: IndexShowPeopleComponent},
  {path:'vehicles', component: IndexShowVehiclesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
