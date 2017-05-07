import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {TeamService} from '../data/team.service'

import {ScoutGroupService} from '../data/scout-group.service'
import {IScoutGroup} from "../data/scout-group.model";

import {OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {IHikeClass} from "../data/hike-class.model";
import {HikeClassService} from "../data/hike-class.service";
import {AuthService} from "../shared/auth.service";
import {UserService} from "../data/user.service";

@Component({
    templateUrl: 'app/teams/create-team.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}    
        .error input {background-color: #E05C65}
        .error ::-webkit-input-placeholder{color:#999;}
        .error ::-moz-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :-ms-input-placeholder {color:#999;}
        `]
})


export class TeamNewComponent implements OnInit {

    teamForm:FormGroup;
    name: FormControl;
    groupId: FormControl;
    leaderId: FormControl;
    hikeClass: FormControl;

    // data for the selector
    hikeClasses: IHikeClass[] = [];
    scoutGroups: IScoutGroup[] = [];

    constructor(private router: Router,
                private teamService:TeamService,
                private auth:AuthService,
                private scoutGroupService: ScoutGroupService,
                private hikeClassService:HikeClassService,
                private userService: UserService) {
    }


    saveTeam(formValues){
        //this.teamService.saveTeam(formValues)
        formValues.leaderId = this.userService.currentUser.id;
        formValues.scouts=[];
        console.log(formValues);
        this.teamService.saveTeam(formValues);
        //this.router.navigate(['/teams'])


    }

    ngOnInit() {
        // required to populate drop down
        this.hikeClasses = this.hikeClassService.getHikeClasses();
        this.scoutGroups = this.scoutGroupService.getScoutGroups();

        this.name = new FormControl('',Validators.required);
        this.groupId = new FormControl(this.userService.currentUser.scoutGroup.id, Validators.required);
        this.leaderId = new FormControl(this.userService.getCommonName(),Validators.required)
        this.leaderId.disable()
        this.hikeClass = new FormControl('',Validators.required);

        this.teamForm = new FormGroup({
            name: this.name,
            groupId: this.groupId,
            leaderId: this.leaderId,
            hikeClass: this.hikeClass
        })
    }

    cancel() {
        this.router.navigate(['/teams'])
    }
}
