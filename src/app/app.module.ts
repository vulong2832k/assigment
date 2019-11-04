import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LoginComponent } from './login/login.component';
import { DangkyComponent } from './dangky/dangky.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { RedangkyComponent } from './redangky/redangky.component';
@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    LoginComponent,
    DangkyComponent,
    LienheComponent,
    RedangkyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
