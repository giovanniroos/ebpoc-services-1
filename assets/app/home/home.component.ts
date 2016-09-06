import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import { SchemeService } from '../scheme/scheme.service';
import { ISchemeDetails } from '../scheme/schemeDetails';
import { SchemeFilterPipe } from '../scheme/scheme-filter.pipe';

@Component({
    templateUrl: 'app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [SchemeFilterPipe]
})
export class HomeComponent implements OnInit {
    public pageTitle: string = "Schemes for Carl Chemaly";
    schemes: ISchemeDetails[];
    errorMessage: string;
    listFilter: string = '';

    constructor(private _schemeService: SchemeService) {
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this._schemeService.getSchemes()
            .subscribe(
            schemes => this.schemes = schemes,
            error => this.errorMessage = <any>error
            );
    }
}
