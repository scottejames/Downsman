export interface  ITeam{
    id: number,
    name: string,
    group: string,
    leader: string,
    members : IMember[]
}


export interface IMember{
    id: number
    name: string
    age: number
}