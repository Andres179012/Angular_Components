import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardmasonryComponent } from './cardmasonry/cardmasonry.component';
import { CardoperarioComponent } from './cardoperario/cardoperario.component';
import { CardfoodComponent } from './cardfood/cardfood.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CalendarComponent,
    CardmasonryComponent,
    CardoperarioComponent,
    CardfoodComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
