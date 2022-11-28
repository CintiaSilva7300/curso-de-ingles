import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { TentativasComponent } from './components/tentativas/tentativas.component';
import { ProgressoComponent } from './components/progresso/progresso.component';
import { PainelComponent } from './components/painel/painel.component';

@NgModule({
  declarations: [AppComponent, TopoComponent, TentativasComponent, ProgressoComponent, PainelComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
