import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*For using form in angular*/
import { FormsModule } from '@angular/Forms';

/*For using Http request in angular*/
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

/*For SharedService Implementation*/
import { SharedServiceService} from './sharedservice/shared-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
