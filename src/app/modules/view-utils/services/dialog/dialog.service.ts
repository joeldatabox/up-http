import {Injectable, ViewContainerRef} from "@angular/core";
import {IAlertConfig, IConfirmConfig, TdDialogService} from "@covalent/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class DialogService {

  constructor(private _dialogService: TdDialogService) {
  }

  public confirmDialog(): ConfirmDialog {
    return new ConfirmDialog(this._dialogService);
  }

  public confirmDeleteDialog(): ConfirmDialog {
    return this.confirmDialog()
      .message("Deseja realmente exluir este registro?")
      .cancelButton("Cancelar")
      .acceptButton("Excluir");
  }

  public showMessageDialog(): ShowMessageDialog {
    return new ShowMessageDialog(this._dialogService);
  }
}

export class ConfirmDialog {
  config: IConfirmConfig;

  constructor(private _dialogService: TdDialogService) {
    this.config = {
      message: "Informe uma mensagem",
      title: "Atenção",
      disableClose: false,
      viewContainerRef: null,
      acceptButton: "Sim",
      cancelButton: "Não"
    };
  }

  message(message: string): ConfirmDialog {
    this.config.message = message;
    return this;
  }

  title(title: string): ConfirmDialog {
    this.config.title = title;
    return this;
  }

  disableClose(disable: boolean): ConfirmDialog {
    this.config.disableClose = disable;
    return this;
  }

  viewContainerRef(view: ViewContainerRef): ConfirmDialog {
    this.config.viewContainerRef = view;
    return this;
  }

  acceptButton(acceptButton: string): ConfirmDialog {
    this.config.acceptButton = acceptButton;
    return this;
  }

  cancelButton(cancelButton: string): ConfirmDialog {
    this.config.cancelButton = cancelButton;
    return this;
  }

  show(): Observable<boolean> {
    return this._dialogService
      .openConfirm(this.config)
      .afterClosed()
      .map((resp: boolean) => resp);
  }
}

export class ShowMessageDialog {
  config: IAlertConfig;

  constructor(private _dialogService: TdDialogService) {
    this.config = {
      message: "Informe uma mensagem",
      title: "Atenção",
      disableClose: false,
      viewContainerRef: null,
      closeButton: "Fechar"
    };
  }

  message(message: string): ShowMessageDialog {
    this.config.message = message;
    return this;
  }

  title(title: string): ShowMessageDialog {
    this.config.title = title;
    return this;
  }

  disableClose(disable: boolean): ShowMessageDialog {
    this.config.disableClose = disable;
    return this;
  }

  viewContainerRef(view: ViewContainerRef): ShowMessageDialog {
    this.config.viewContainerRef = view;
    return this;
  }

  closeButton(closeButton: string): ShowMessageDialog {
    this.config.closeButton = closeButton;
    return this;
  }

  show(): Observable<boolean> {
    return this._dialogService
      .openAlert(this.config)
      .afterClosed()
      .map((resp: boolean) => resp);
  }
}
