import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {MediaType} from "./media-type";

@Injectable()
export class HttpService {
  private _headers: Map<string, string>;

  constructor(private http: HttpClient) {
    this._headers = new Map();
  }

  public header(key: string, value: string): HttpService {
    this._headers.set(key, value);
    return this;
  }

  public acceptJsonOnly(): HttpService {
    this._headers.set("Accept", MediaType.APPLICATION_JSON_ANY);
    return this;
  }

  public acceptTextOnly(): HttpService {
    this._headers.set("Accept", MediaType.TEXT_PLAIN);
    return this;
  }


  public get(url: string): Observable<any> {
    return this.http.get(url, this.getHttpHeaders());
  }

  private getHttpHeaders() {
    const headers: HttpHeaders = new HttpHeaders();
    const interator = this._headers.entries();
    let v;
    do {
      v = interator.next();
      headers = headers.append(v.value[0], v.value[1]);
    } while (v.done);
    console.log(headers);
    return {headers: headers};
  }
}
