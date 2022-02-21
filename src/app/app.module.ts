import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WieComponent } from './wie/wie.component';
import { FotosComponent } from './fotos/fotos.component';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WieComponent,
    FotosComponent,
    ContactComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
