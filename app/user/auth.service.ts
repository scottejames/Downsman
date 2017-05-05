import {Injectable} from '@angular/core'
import {IUser} from "./user.model";
import {ScoutGroupService} from '../scout-group/scout-group.service'

@Injectable()
export class AuthService {
    currentUser :IUser

    // Hack to save having to login every time I test
    constructor(private scoutGroupService:ScoutGroupService){
        this.currentUser = TEAM[0];
    }

    loginUser(userName: string, password: string) {

        var user :IUser
        user = TEAM.find(user => user.userName === userName)
        // Check password later.

        this.currentUser = user
    }
    updateCurrentUser(firstName:string, lastName:string, scoutGroupId:number){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        this.currentUser.scoutGroup = this.scoutGroupService.getScoutGroup(scoutGroupId);
        console.log('CU:',this.currentUser,' ID ', this.scoutGroupService.getScoutGroup(scoutGroupId))
    }
    isAuthenticated(){
        return !!this.currentUser
    }

}

const TEAM :IUser[] = [
    {
        id: 1,
        userName: 'scottejames',
        firstName: 'Scott',
        lastName: 'James',
        scoutGroup: {
            id: 2,
            name: '10th Haywards Heath'
        }
    },{
        id: 2,
        userName: 'bethmjames',
        firstName: 'Bethany',
        lastName: 'James',
        scoutGroup: {
            id: 2,
            name: '10th Haywards Heath'
        }
    },{
        id: 3,
        userName: 'chrissearle',
        firstName: 'Chris',
        lastName: 'Searle',
        scoutGroup: {
            id: 1,
            name: '1st Haywards Heath'
        }
    }


]