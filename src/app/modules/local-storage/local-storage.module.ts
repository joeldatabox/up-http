import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from "./local-storage.service";

/**
 * @author Joel Rodrigues Moreira
 * e-mail: <a href="mailto:joel.databox@gmail.com">joel.databox@gmail.com</a>
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService
  ]
})
export class StorageModule {
}
