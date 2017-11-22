import {Logger} from "ng2-logger/src/logger";
import {Level, Log} from "ng2-logger";
import {isEmpty} from "../commons.model";


export class Logg {
  private readonly _data: LoggData;
  private readonly _error: LoggError;
  private readonly _info: LoggInfo;
  private readonly _warn: LoggWarn;

  constructor(private value: string) {
    this._data = LoggData.of(value);
    this._error = LoggError.of(value);
    this._info = LoggInfo.of(value);
    this._warn = LoggWarn.of(value);
  }

  public static of(value: string): Logg {
    return new Logg(value);
  }

  public d(message: string, ...otherParams: any[]): Logg {
    this._data.data(message, otherParams);
    return this;
  }

  public e(message: string, ...otherParams: any[]): Logg {
    this._error.error(message, otherParams);
    return this;
  }

  public i(message: string, ...otherParams: any[]): Logg {
    this._info.info(message, otherParams);
    return this;
  }

  public w(message: string, ...otherParams: any[]): Logg {
    this._warn.warn(message, otherParams);
    return this;
  }
}

export class LoggData {
  private readonly _data: Logger<object>;

  constructor(private value: string) {
    this._data = Log.create("d_" + value, Level.DATA);
    this._data.color = "#16c6d0";
  }

  public static of(value: string): LoggData {
    return new LoggData(value);
  }

  public data(message: string, ...otherParams: any[]): LoggData {
    (isEmpty(otherParams)) ? this._data.data(message) : this._data.data(message, otherParams);
    return this;
  }
}

export class LoggError {
  private readonly _error: Logger<object>;

  constructor(private value: string) {
    this._error = Log.create("e_" + value, Level.ERROR);
    this._error.color = "#e26a6a";
  }

  public static of(value: string): LoggError {
    return new LoggError(value);
  }

  public error(message: string, ...otherParams: any[]): LoggError {
    (isEmpty(otherParams)) ? this._error.error(message) : this._error.error(message, otherParams);
    return this;
  }
}

export class LoggInfo {
  private readonly _info: Logger<object>;

  constructor(private value: string) {
    this._info = Log.create("i_" + value, Level.INFO);
    this._info.color = "#92a2b9";
  }

  public static of(value: string): LoggInfo {
    return new LoggInfo(value);
  }

  public info(message: string, ...otherParams: any[]): LoggInfo {
    (isEmpty(otherParams)) ? this._info.info(message) : this._info.info(message, otherParams);
    return this;
  }
}

export class LoggWarn {
  private readonly _warn: Logger<object>;

  constructor(private value: string) {
    this._warn = Log.create("w_" + value, Level.WARN);
    this._warn.color = "#fcb66c";
  }

  public static of(value: string): LoggWarn {
    return new LoggWarn(value);
  }

  public warn(message: string, ...otherParams: any[]): LoggWarn {
    (isEmpty(otherParams)) ? this._warn.warn(message) : this._warn.warn(message, otherParams);
    return this;
  }
}
