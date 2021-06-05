import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SucccessPageComponent } from './components/succcess-page/succcess-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SucccessPageComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
