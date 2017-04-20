import {Injectable} from '@angular/core'
@Injectable()
export class EventService {
  getEvents() {
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
