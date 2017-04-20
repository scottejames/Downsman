import {Injectable} from '@angular/core'
@Injectable()
export class TeamService {
  getTeams() {
    return TEAMS
  }
  getEvent(id : number) {
    return TEAMS.find(event => event.id === id)
  }
}

const TEAMS = [
    {
      id: 1,
      name: 'MadHatters',
      group: '10th HH',
      leader: 'Scott',
      members : [{
        name: 'Rod',
        age: 12
      },
      {
        name: 'Jane',
        age: 14
      }]
    },
    {
      id: 2,
      name: 'Fools',
      group: '1st HH',
      leader: 'Chris',
      members : [{
        name: 'Dick',
        age: 13
      },
      {
        name: 'Roger',
        age: 11
      }]
    },
    {
      id: 1,
      name: 'Woodpidgeons',
      group: 'Explorers',
      leader: 'robin',
      members : [{
        name: 'Jenny',
        age: 14
      },
      {
        name: 'Andrew',
        age: 15
      }]
    }
  ]
