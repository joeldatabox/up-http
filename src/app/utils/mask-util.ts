import emailMask from "text-mask-addons/dist/emailMask";
import {createAutoCorrectedDatePipe} from "text-mask-addons/dist/textMaskAddons";

export class MaskUltil {
  public static get maskEmail() {
    return emailMask;
  }

  public static get maskCnpj() {
    return {mask: [/\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/,]};
  }

  public static get maskFone() {
    return {mask: ["(", /[1-9]/, /[1-9]/, ")", " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]};
  }

  public static get maskCell() {
    return {mask: ["(", /[1-9]/, /[1-9]/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]};
  }

  public static get maskDate() {
    return {mask: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/], placeholderChar: " ", keepCharPositions: false, pipe: createAutoCorrectedDatePipe("dd/mm/yyyy")};
  }

  public static get maskMoney() {
    return createNumberMask({prefix: "", thousandsSeparatorSymbol: ".", decimalSymbol: ",", allowDecimal: true, requireDecimal: true});
  }
}
