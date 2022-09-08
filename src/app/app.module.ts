import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexShowPlanetComponent } from './index-show-planet/index-show-planet.component';
import {HttpClientModule} from "@angular/common/http";
import { IndexShowPeopleComponent } from './index-show-people/index-show-people.component';
import { IndexShowVehiclesComponent } from './index-show-vehicles/index-show-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    IndexShowPlanetComponent,
    IndexShowPeopleComponent,
    IndexShowVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
