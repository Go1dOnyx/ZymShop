import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    constructor(private route: Router) {}

    routeToPage(routeUrl:string): void {
        this.route.navigate([`${routeUrl}`]);
    }
}