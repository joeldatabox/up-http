import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {isNullOrUndefined} from "../../../../utils/commons.model";

@Injectable()
export class SnackService {

  constructor(private snack: MatSnackBar) {
  }

  public show(message: string, labelExit?: string, durationMessage?: number): void {
    if (isNullOrUndefined(labelExit)) labelExit = "Fechar";
    if (isNullOrUndefined(durationMessage)) durationMessage = 3000;
    this.snack.open(message, labelExit, {
      duration: durationMessage
    });
  }
}
