import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/home/home-components/slider/slider.component';
import { CorporateComponent } from './components/home/home-components/corporate/corporate.component';
import { HomeServicesComponent } from './components/home/home-components/home-services/home-services.component';
import { RouterModule } from '@angular/router';
import { HomeProjectsComponent } from './components/home/home-components/home-projects/home-projects.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectComponent,
    ServicesComponent,
    AboutComponent,
    PhotosComponent,
    ContactComponent,
    FooterComponent,
    SliderComponent,
    CorporateComponent,
    HomeServicesComponent,
    HomeProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot("")
    MatButtonModule,
    MatCardModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
