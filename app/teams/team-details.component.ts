import {Component} from '@angular/core'
import {TeamService} from './team-service'

@Component({
  templateUrl: '/app/teams/team-details.component.html',
  styles : [`
    .container {padding-left:20px; padding-right:20px;}
    `]
})
export class TeamDetailsComponent{
  team:any

  constructor (private teamService: TeamService){

  }
  ngOnInit() {
    this.team = this.teamService.getTeam(1)
  }
}
