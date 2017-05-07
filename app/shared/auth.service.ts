import {Injectable} from '@angular/core'
import {IUser} from "../data/user.model";
import {ScoutGroupService} from '../data/scout-group.service'
import {UserService} from "../data/user.service";

@Injectable()
export class AuthService {

    // Hack to save having to login every time I test
    constructor(private userService: UserService){
        // hack to save having to login every time.
        userService.currentUser = userService.getUserById(1);
    }

    loginUser(userName: string, password: string) {
        // Check password later.
        this.userService.currentUser = this.userService.getUserByUserName(userName);
    }
    logoutUser(){
        this.userService.currentUser = null;
    }

    isAuthenticated(){
        return !!this.userService.currentUser
    }


}
