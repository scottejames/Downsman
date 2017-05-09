import {Injectable} from "@angular/core";
import {ITeam, IScout} from "./team.model";
import {AuthService} from "../shared/auth.service";
import {UserService} from "./user.service";
import {ScoutGroupService} from "./scout-group.service";

@Injectable()
export class TeamService {
    constructor(private auth: AuthService, private userService: UserService, private groupScoutService: ScoutGroupService) {

    }

    getTeams(): ITeam[] {
        var result: ITeam[] = TEAMS.filter(t => t.leaderId === this.userService.currentUser.id).map(t => this.enrichTeam(t));
        return result;
    }

    getTeam(id: number): ITeam {
        var team = TEAMS.find(t => t.id === id);
        return this.enrichTeam(team);
    }

    saveTeam(team: any) {
        team.id = this.getNextId();
        if (!team.leaderId)
            team.leaderId = team.leader.id;
        if (!team.groupId)
            team.groupId = team.group.id;
      //  console.log(team);
        TEAMS.push(team);
    }

    private enrichTeam(team: any): ITeam {
        team.group = this.groupScoutService.getScoutGroup(team.groupId);
        team.leader = this.userService.getUserById(team.leaderId);
        return team;
    }

    addScout(teamId: number,scout: IScout){
        scout.id = this.getNextScoutID(teamId);
        var team = TEAMS.find(t => t.id === teamId);
        team.scouts.push(scout);
    }
    updateScout(teamId: number, scout: IScout){
        var team = TEAMS.find(t => t.id === teamId);
        var scouts :IScout [] = team.scouts;
        scouts = scouts.filter(s=>s.id!=scout.id);
        scouts.push(scout);
        team.scouts = scouts;
    }
    deleteScout(teamId: number,id: number){
        var team = TEAMS.find(t => t.id === teamId);
        var scouts :IScout [] = team.scouts;
        scouts = scouts.filter(s=>s.id!=id);
        team.scouts = scouts;
    }

    getScout(teamId: number, id: number) : IScout{
        var team = TEAMS.find(t => t.id === teamId);
        var scout = team.scouts.find(s => s.id === id);
        return scout;
    }

    private getNextId(): number {
        const nextId = Math.max.apply(null, TEAMS.map(s => s.id)) + 1;
        return nextId
    }
    private getNextScoutID(teamId: number): number{
        var team = TEAMS.find(t => t.id === teamId);
        const nextId = Math.max.apply(null, team.scouts.map(s => s.id)) + 1;
        return nextId;

    }
}

const TEAMS = [
    {
        id: 1,
        name: 'MadHatters',
        groupId: 1,
        leaderId: 1,
        scouts: [{
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
        scouts: [{
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
        id: 3,
        name: 'Woodpidgeons',
        groupId: 2,
        leaderId: 3,
        scouts: [{
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

