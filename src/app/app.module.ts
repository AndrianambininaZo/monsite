import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { TestComponent } from './test/test.component';
import { AppClientComponent } from './client/app-client/app-client.component';
import { DasboardClientComponent } from './client/dasboard-client/dasboard-client.component';
import { ConnexionClientComponent } from './client/connexion-client/connexion-client.component';
import { TravailComponent } from './client/app-client/travail/travail.component';
import { FormationComponent } from './client/app-client/formation/formation.component';
import { VenteComponent } from './client/app-client/vente/vente.component';


@NgModule({
  declarations: [
    AppComponent,
    AppClientComponent,
    TestComponent,
    DasboardClientComponent,
    ConnexionClientComponent,
    TravailComponent,
    FormationComponent,
    VenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    CarouselModule,
    NgxPaginationModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
