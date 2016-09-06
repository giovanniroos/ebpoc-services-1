import {Component} from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { RouteConfig } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; //Load all features

import { HomeComponent } from './home/home.component';
import { SchemeService } from './scheme/scheme.service';
// import { MemberComponent } from './member/member.component';

@Component({
  selector: 'eb-app',
    template: `<div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Home']">Home</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, SchemeService]
})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    // { path: '/members:id', name: 'Members', component: MemberComponent}
])
export class AppComponent{
  pageTitle: string = "Employer benefits";
}


// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: ` 
//         <h1>Hello World!</h1>
//     `
// })
// export class AppComponent {
    
// }