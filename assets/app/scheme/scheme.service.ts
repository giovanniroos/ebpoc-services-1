import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {ISchemeDetails} from './schemeDetails';
// import 'rxjs/Rx';


@Injectable()
export class SchemeService{
  private _url = "api/schemes/schemeList.json";

    constructor(private _http: Http) {

    }

    getSchemes(): Observable<ISchemeDetails[]> {
        return this._http.get(this._url)
            .map((response: Response) => <ISchemeDetails[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getScheme(caseKey: string): Observable<ISchemeDetails> {
        return this.getSchemes()
            .map((products: ISchemeDetails[]) => products.find(p => p.scheme.caseKey === caseKey));
    }
}
