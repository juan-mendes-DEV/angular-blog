import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BarraLateralEsquerdaComponent } from './components/barra-lateral-esquerda/barra-lateral-esquerda.component';
import { BarraLateralDireitaComponent } from './components/barra-lateral-direita/barra-lateral-direita.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MedioCardComponent } from './components/medio-card/medio-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BarraLateralEsquerdaComponent,
    BarraLateralDireitaComponent,
    BigCardComponent,
    MedioCardComponent,
    SmallCardComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
