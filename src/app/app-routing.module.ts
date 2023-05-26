import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { AproposComponent } from './Components/apropos/apropos.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'apropos', component:AproposComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
