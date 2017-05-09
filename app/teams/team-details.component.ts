import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {TeamService, ITeam} from '../data/index';
import {IScout} from "../data/team.model";

@Component({
    templateUrl: '/app/teams/team-details.component.html',
    styles: [`
    .container {padding-left:20px; padding-right:20px;}
    `]
})
export class TeamDetailsComponent {
    team: ITeam;
    mode: string;
    selectedScout: IScout;

    constructor(private teamService: TeamService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.mode = 'list';
        this.team = this.teamService.getTeam(+this.route.snapshot.params['id'])
    }

    deleteScout(identifier: number) {
        console.log('TeamDetailsComponent :delete scout', this.team.id, identifier);
        this.teamService.deleteScout(this.team.id, identifier);
    }
    editScout(identifier: number){
        console.log('TeamDetailsComponent :edit scout', this.team.id, identifier);
        this.selectedScout = this.teamService.getScout(this.team.id, identifier);

        this.mode='edit';

    }
    addScout() {
        this.mode = 'new';
        console.log('TeamDetailsComponent: add');
    }

    saveScout(scout: IScout) {
        console.log('scout save', scout)
        this.teamService.addScout(this.team.id, scout);
        this.mode = 'list';

    }
    updateScout(scout: IScout) {
        console.log('scout update', scout)
        this.teamService.updateScout(this.team.id, scout);
        this.mode = 'list';

    }
    cancelCreateScout() {
        this.mode = 'list';
    }

}
