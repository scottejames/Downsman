import {IScoutGroup} from "../scout-group/scout-group.model";
import {IUser} from "../user/user.model";

export interface  ITeam{
    id: number,
    name: string,
    leaderId: number,
    groupId: number,
    members : IMember[]
}


export interface IMember{
    id: number
    name: string
    age: number
}