import {Component} from '@angular/core';
import {HttpService} from "./modules/http/http.service";
import {MetaService} from "./modules/view-utils/services/meta/meta.service";
import {SnackService} from "./modules/view-utils/services/snack/snack.service";
import {DialogService} from "./modules/view-utils/services/dialog/dialog.service";
import {LoadingService} from "./modules/view-utils/services/loading/loading.service";
import {Logg} from "./utils/logger/Logger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpService: HttpService, private metService: MetaService, private snack: SnackService, private dialog: DialogService, private loading: LoadingService) {
  }

  exec() {
    const log = Logg.of("adsa");
    log.d("asdfasdf", "kasdf");
    this.metService.setDefaultColorApp("#010101");
    this.dialog.showMessageDialog().show().subscribe();
    this.snack.show("asdf");
    this.httpService
      .createRequest()
      .url("/ASDFdjasdj-asd?66dr&i=22d")
      .acceptJsonOnly()
      .acceptTextOnly()
      .setHeader("testando1", "funfou")
      .setHeader("testando2", "funfou")
      .setHeader("testando3", "funfou")
      .setHeader("testando4", "funfou")
      .setHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .appendHeader("testando5", "funfou")
      .get()
      .subscribe(resp => console.log(resp));


  }
}
