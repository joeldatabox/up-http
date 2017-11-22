import {inject, TestBed} from "@angular/core/testing";

import {LoadingTopbarService} from "./loading-topbar.service";

describe("LoadingTopbarService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingTopbarService]
    });
  });

  it("should be created", inject([LoadingTopbarService], (service: LoadingTopbarService) => {
    expect(service).toBeTruthy();
  }));
});
