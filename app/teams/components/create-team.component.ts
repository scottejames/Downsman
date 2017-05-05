import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {TeamService} from '../service/team.service'

import {ScoutGroupService} from '../../scout-group/service/scout-group.service'
import {IScoutGroup} from "../../scout-group/model/scout-group.model";

import {OnInit} from '@angular/core'

@Component({
    templateUrl: './create-team.component.html',
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
    isDirty: boolean = false;
    scoutGroups : IScoutGroup[] = []

    constructor(private router: Router,private teamService:TeamService,private scoutGroupService: ScoutGroupService) {
    }
    saveTeam(formValues){
        this.teamService.saveTeam(formValues)
        this.isDirty = false
        this.router.navigate(['/teams'])

        console.log(formValues)

    }

    ngOnInit() {
       this.scoutGroups = this.scoutGroupService.getScoutGroups();
    }

    cancel() {
        this.router.navigate(['/teams'])
    }
}
