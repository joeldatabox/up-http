import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpService} from "./http.service";
import {HttpClientModule} from "@angular/common/http";
import {HeaderInterceptorProvider} from "./header-interceptor";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    HeaderInterceptorProvider
  ]
})
export class HttpModule {
}
