import {Injectable} from "@angular/core";
import {ITeam} from "./team.model";
import {AuthService} from "../shared/auth.service";
import {UserService} from "./user.service";
import {ScoutGroupService} from "./scout-group.service";

@Injectable()
export class TeamService {
    constructor(private auth: AuthService, private userService: UserService,private groupScoutService: ScoutGroupService
    ) {

    }

    getTeams(): ITeam[] {
        var result : ITeam[] = TEAMS.filter(t=> t.leaderId === this.userService.currentUser.id).map( t => this.enrichTeam(t));
        return result;
    }

    getTeam(id: number): ITeam {
        var team = TEAMS.find(t=> t.id === id);
        return this.enrichTeam(team);
    }

    saveTeam(team: any) {
        team.id = this.getNextId();
        team.scouts = [];
        team.leaderId = team.leader.id;
        team.groupId = team.group.id;
        TEAMS.push(team);
    }

    private enrichTeam(team: any) :ITeam{
        team.group = this.groupScoutService.getScoutGroup(team.groupId);
        team.leader = this.userService.getUserById(team.leaderId);
        return team;
    }
    getNextId(): number {
        return 999;
    }
}

const TEAMS = [
    {
        id: 1,
        name: 'MadHatters',
        groupId: 1,
        leaderId: 1,
        scouts: [{
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
        groupId: 1,
        leaderId: 2,
        scouts: [{
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
        groupId: 2,
        leaderId: 3,
        scouts: [{
            name: 'Jenny',
            age: 14
        },
            {
                name: 'Andrew',
                age: 15
            }]
    }
]

