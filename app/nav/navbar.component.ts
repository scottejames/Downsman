import {Component} from '@angular/core'
import {AuthService} from '../shared/auth.service'
import {UserService} from "../data/user.service";

@Component({
    selector: 'nav-bar',
    templateUrl : 'app/nav/navbar.component.html',
    styles : [`
        .nav.navbar-nav { font-size: 15px;}
        #searchForm { margin-right : 100px;}
        @media (max-width: 1200px) {#searchForm { display: none}}
        li > a.active {color: #F97924;}
      `]
})
export class NavBarComponent {
    constructor(private auth :AuthService, private userService: UserService) {
    }
}
