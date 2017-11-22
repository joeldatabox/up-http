import {Component} from '@angular/core';
import {HttpService} from "./modules/http/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpService: HttpService) {
  }

  exec() {
    this.httpService
      .header("testando", "funfou")
      .header("kasdf", "asdflkasd")
      .get("/test")
      .subscribe(resp => console.log(resp));
  }
}
