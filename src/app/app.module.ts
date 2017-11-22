import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpModule} from "./modules/http/http.module";
import {ViewUtilsModule} from "./modules/view-utils/view-utils.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ViewUtilsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
