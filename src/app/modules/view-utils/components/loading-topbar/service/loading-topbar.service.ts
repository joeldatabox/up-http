import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {LoaderState} from "../model/loading";

@Injectable()
export class LoadingTopbarService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() {
  }

  public show() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  public hide() {
    this.loaderSubject.next(<LoaderState>{show: false});
  }
}
