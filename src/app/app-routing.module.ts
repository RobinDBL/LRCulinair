import { ContactComponent } from './contact/contact.component';
import { FotosComponent } from './fotos/fotos.component';
import { WieComponent } from './wie/wie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fotos', component: FotosComponent},
  { path: 'wie', component: WieComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
