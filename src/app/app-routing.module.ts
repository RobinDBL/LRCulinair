import { ContactComponent } from './contact/contact.component';
import { MenusComponent } from './menus/menus.component';
import { WieComponent } from './wie/wie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'wie', component: WieComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
