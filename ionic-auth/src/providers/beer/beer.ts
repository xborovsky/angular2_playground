import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class BeerProvider {

  constructor(public http: Http, private oauthService:OAuthService) {
  }

  getAll() : Observable<any> {
    const headers:Headers = new Headers();
    headers.append('Authorization', this.oauthService.authorizationHeader());
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get('http://localhost:8080/good-beers', options)
      .map((response: Response) => response.json());
  }

}
