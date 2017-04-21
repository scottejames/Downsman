export interface  ITeam{
    id: number,
    name: string,
    members : IMember[]
}


export interface IMember{
    id: number
    name: string
    age: number
}