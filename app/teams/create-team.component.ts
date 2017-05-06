import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {TeamService} from './team.service'

import {ScoutGroupService} from '../scout-group/scout-group.service'
import {IScoutGroup} from "../scout-group/scout-group.model";

import {OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {IHikeClass} from "../hike-class/hike-class.model";
import {HikeClassService} from "../hike-class/hike-class.service";
import {AuthService} from "../user/auth.service";

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
                private hikeClassService:HikeClassService) {
    }


    saveTeam(formValues){
        //this.teamService.saveTeam(formValues)
        formValues.leaderId = this.auth.currentUser.id;
        formValues.member=[];
        this.teamService.saveTeam(formValues);
        this.router.navigate(['/teams'])

        console.log(formValues)

    }

    ngOnInit() {
        // required to populate drop down
        this.hikeClasses = this.hikeClassService.getHikeClasses();
        this.scoutGroups = this.scoutGroupService.getScoutGroups();

        this.name = new FormControl('',Validators.required);
        this.groupId = new FormControl(this.auth.currentUser.scoutGroup.id, Validators.required);
        this.leaderId = new FormControl(this.auth.getCommonName(),Validators.required)
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
