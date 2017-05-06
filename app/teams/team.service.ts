import {Injectable} from '@angular/core'
import {ITeam, IMember} from './team.model'

@Injectable()
export class TeamService {
  getTeams() :ITeam[] {
    return TEAMS
  }
  getTeam(id : number) : ITeam {
    return TEAMS.find(event => event.id === id)
  }
  saveTeam(team:ITeam){
    team.id = this.getNextId();
    team.members = []
    TEAMS.push(team)
  }

  getNextId() : number {
    return 999;
}
}

const TEAMS :ITeam [] = [
  {
    id: 1,
    name: 'MadHatters',
    groupId: 1,
    leaderId: 1,
    members : [{
      id: 1,
      name: 'Rod',
      age: 12
    },
      {
        id: 2,
        name: 'Jane',
        age: 14
      }]
  },
  {
    id: 2,
    name: 'Fools',
    groupId: 1,
    leaderId: 2,
    members : [{
      id: 1,
      name: 'Dick',
      age: 13
    },
      {
        id: 2,
        name: 'Roger',
        age: 11
      }]
  },
  {
    id: 1,
    name: 'Woodpidgeons',
    groupId: 2,
    leaderId: 3,
    members : [{
      id: 1,
      name: 'Jenny',
      age: 14
    },
      {
        id: 2,
        name: 'Andrew',
        age: 15
      }]
  }
]

