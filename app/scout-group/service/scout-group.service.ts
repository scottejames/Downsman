import {Injectable} from '@angular/core'
import {IScoutGroup} from '../model/scout-group.model'

@Injectable()
export class ScoutGroupService {
    getScoutGroups() :IScoutGroup[] {
        return GROUPS
    }
    getScoutGroup(id : number) : IScoutGroup {
        return GROUPS.find(group => group.id === id);
    }
    saveGroup(group:IScoutGroup){
        group.id = 999;
        GROUPS.push(group);
    }
}


const GROUPS :IScoutGroup [] = [
    {
        id: 1,
        name: '1st Haywards Heath'
    },
    {
        id: 2,
        name: '10th Haywards Heath'
    },
    {
        id: 3,
        name: '1st BurgesHill'

    }];