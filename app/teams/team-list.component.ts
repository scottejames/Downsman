import {Component,OnInit} from '@angular/core'
import {TeamService} from './team.service'
@Component ({
  selector : 'team-list',
  template: `
	<div>
		<h1> Team listings </h1>
	 	<hr/>
	 	<div class="row">
	 		<div *ngFor="let team of teams" class="col-md-5">
	 			<team-thumbnail #thumbnail [team]="team"></team-thumbnail>
	 		</div>
	 	</div>
	</div>

  `
})

export class TeamListComponent implements OnInit{
	teams : any
	constructor(private teamService: TeamService){
	}
	ngOnInit(){
			this.teams = this.teamService.getTeams()
		}
}
