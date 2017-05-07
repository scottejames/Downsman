import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {TeamService,ITeam } from '../data/index';

@Component({
  templateUrl: '/app/teams/team-details.component.html',
  styles : [`
    .container {padding-left:20px; padding-right:20px;}
    `]
})
export class TeamDetailsComponent{
  team:ITeam;

  constructor (private teamService: TeamService,
                private route:ActivatedRoute){

  }
  ngOnInit() {
    this.team = this.teamService.getTeam(+this.route.snapshot.params['id'])
  }
}
