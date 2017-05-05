import {IScoutGroup} from "../scout-group/scout-group.model";

export interface IUser{
    id: number
    firstName: string
    lastName : string
    userName: string
    scoutGroup: IScoutGroup
}