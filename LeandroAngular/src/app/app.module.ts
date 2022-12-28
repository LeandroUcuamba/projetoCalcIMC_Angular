import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraImcModule } from './calculadoraImc/calculadoraImc.module';
import { TabelaImcModule } from './tabelaImc/tabelaImc.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TabelaImcModule,
    CalculadoraImcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
