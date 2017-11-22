import {Component, OnDestroy, OnInit} from "@angular/core";
import {LoadingTopbarService} from "../service/loading-topbar.service";
import {Subscription} from "rxjs/Subscription";
import {LoaderState} from "../model/loading";

@Component({
  selector: "loading-topbar",
  templateUrl: "./loading-topbar.component.html",
  styleUrls: ["./loading-topbar.component.css"]
})
export class LoadingTopbarComponent implements OnInit, OnDestroy {

  show: boolean = false;
  private subscription: Subscription;

  constructor(private loadingService: LoadingTopbarService) {
  }

  ngOnInit() {
    this.subscription = this.loadingService
      .loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
