import { Component, Input, OnChanges } from '@angular/core';
import { IScout } from '../data/team.model';
import {TeamService} from "../data/team.service";
@Component ({
    selector : 'scout-list',
    templateUrl: '/app/teams/scout-list.component.html',

})
export class ScoutListComponent {

    @Input() scouts : IScout[];
    @Input() teamId : number
    ngOnInit() {
        console.log(this.scouts);
    }
    constructor(private teamService:TeamService){

    }
    deleteScout(teamId: number, id: number){
        this.teamService.deleteScout(teamId, id);
        console.log('delete scout', teamId, id)
    }
}
