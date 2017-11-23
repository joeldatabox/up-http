import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetaService} from "./services/meta/meta.service";
import {SnackService} from "./services/snack/snack.service";
import {MatDialogModule, MatProgressBarModule, MatSnackBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogService} from "./services/dialog/dialog.service";
import {CovalentDialogsModule, CovalentLoadingModule} from "@covalent/core";
import {LoadingTopbarComponent} from "./components/loading-topbar/component/loading-topbar.component";
import {LoadingService} from "./services/loading/loading.service";
import {LoadingTopbarService} from "./components/loading-topbar/service/loading-topbar.service";

/**
 * @author Joel Rodrigues Moreira
 * e-mail: <a href="mailto:joel.databox@gmail.com">joel.databox@gmail.com</a>
 */
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    CovalentDialogsModule,
    CovalentLoadingModule
  ],
  declarations: [
    LoadingTopbarComponent
  ],
  exports: [
    LoadingTopbarComponent
  ]
  providers: [
    MetaService,
    SnackService,
    DialogService,
    LoadingService,
    LoadingTopbarService
  ]
})
export class ViewUtilsModule {
}
