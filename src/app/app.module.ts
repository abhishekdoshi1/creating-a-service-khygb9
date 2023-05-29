import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//import { BooksService } from './books.service';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
//import { LogginServiceService } from './loggin-service.service';
//import { LoggingService } from './logging.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [
    //BooksService,
    LoginService,
    //LoggingService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
