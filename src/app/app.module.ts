import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { AproposComponent } from './Components/apropos/apropos.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/sharepages/footer/footer.component';
import { NavbarComponent } from './Components/sharepages/navbar/navbar.component';
import { InfosComponent } from './Components/infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AproposComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
