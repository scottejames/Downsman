import {IScoutGroup} from "./scout-group.model";
import {IUser} from "./user.model";

export interface  ITeam {
    id: number,
    name: string,
    leader: IUser,
    group: IScoutGroup,
    scouts: IScout[]
}


export interface IScout {
    id: number,
    name: string,
    age: number
}