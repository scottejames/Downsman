import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {ScoutGroupService} from "./scout-group.service";

@Injectable()
export class UserService {
    currentUser: IUser

    updateCurrentUser(firstName: string, lastName: string, scoutGroupId: number) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        this.currentUser.scoutGroup.id = scoutGroupId;
    }

    constructor(private scoutGroupService: ScoutGroupService) {
    }

    getCommonName() {
        return this.currentUser.firstName + ' ' + this.currentUser.lastName;
    }

    getUserById(id: number): IUser {
        var user:any =  USERS.find(t => t.id === id);
        return this.enrichUser(user);
    }

    getUserByUserName(userName: string) {
        var user :any;
        user = USERS.find(user => user.userName === userName);
        return this.enrichUser(user);
    }

    private enrichUser(user : any) :IUser{
        user.scoutGroup = this.scoutGroupService.getScoutGroup(user.scoutGroupId)
        return user;
    }

}

const USERS = [
    {
        id: 1,
        userName: 'scottejames',
        firstName: 'Scott',
        lastName: 'James',
        scoutGroupId:2

    }, {
        id: 2,
        userName: 'bethmjames',
        firstName: 'Bethany',
        lastName: 'James',
        scoutGroupId:2

    }, {
        id: 3,
        userName: 'chrissearle',
        firstName: 'Chris',
        lastName: 'Searle',
        scoutGroupId:2

    }


]