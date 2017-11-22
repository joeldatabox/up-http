import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  set(key: string, value: string): LocalStorageService {
    window.localStorage[key] = value;
    return this;
  }

  get(key: string, defaultValue = null): string {
    return window.localStorage[key] || defaultValue;
  }

  setObject(key: string, value: object): LocalStorageService {
    window.localStorage[key] = JSON.stringify(value);
    return this;
  }

  getObject(key: string) {
    return JSON.parse(window.localStorage.getItem(key));
  }

  remove(key: string): LocalStorageService {
    window.localStorage.removeItem(key);
    return this;
  }
}
