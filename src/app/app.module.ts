import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BiCriarComponent } from './bi-criar/bi-criar.component';
import { BiListarComponent } from './bi-listar/bi-listar.component';
import { BiEditarComponent } from './bi-editar/bi-editar.component';
import { BiMostrarComponent } from './bi-mostrar/bi-mostrar.component';

import {InputTextModule} from 'primeng-lts/inputtext';
import {CalendarModule} from 'primeng-lts/calendar';
import {CheckboxModule} from 'primeng-lts/checkbox';
import {TableModule} from 'primeng-lts/table';


@NgModule({
  declarations: [
    AppComponent,
    BiCriarComponent,
    BiListarComponent,
    BiEditarComponent,
    BiMostrarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
