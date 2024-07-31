import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProjectComponent } from './components/project/project.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "photos", component: PhotosComponent },
  { path: "project", component: ProjectComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}

