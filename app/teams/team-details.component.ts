import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {TeamService,ITeam } from '../data/index';
import {IScout} from "../data/team.model";

@Component({
  templateUrl: '/app/teams/team-details.component.html',
  styles : [`
    .container {padding-left:20px; padding-right:20px;}
    `]
})
export class TeamDetailsComponent{
  team:ITeam;
  scoutAddMode: boolean;

  constructor (private teamService: TeamService,
                private route:ActivatedRoute){

  }
  ngOnInit() {
    this.scoutAddMode = false;
    this.team = this.teamService.getTeam(+this.route.snapshot.params['id'])
  }

  deleteScout( identifier: number){
    console.log('TeamDetailsComponent :delete scout', this.team.id, identifier);
  }
  addScout(){
      this.scoutAddMode = true;
      console.log('TeamDetailsComponent: add');
  }
  saveScout(scout: IScout){
      console.log('scout', scout)
      this.teamService.addScout(this.team.id,scout);
      this.scoutAddMode = false;

  }
  cancelCreateScout(){
      this.scoutAddMode = false;
  }
  // addScout(teamId:number){
  //   this.scoutAddMode = true;
  //   this.teamService.addScout(teamId,{id: 0,name: 'scott', age:99});
  //
  // }
}
