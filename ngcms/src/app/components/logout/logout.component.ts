import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
            this.router.navigateByUrl('');
        } else {
            this.router.navigateByUrl('login');
        }
    }

}
