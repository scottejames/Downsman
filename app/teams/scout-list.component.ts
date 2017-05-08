import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IScout } from '../data/team.model';
import {TeamService} from "../data/team.service";
@Component ({
    selector : 'scout-list',
    templateUrl: '/app/teams/scout-list.component.html',

})
export class ScoutListComponent {

    @Input() scouts : IScout[];
    @Input() teamId : number
    @Output() delete = new EventEmitter()
    @Output() add = new EventEmitter()

    addMode:boolean = false;

    ngOnInit() {
        console.log(this.scouts);
    }
    constructor(private teamService:TeamService){

    }

    deleteScout(id: number){
        this.delete.emit(id);
        console.log('ScoutListComponent: delete ' , id);
    }

    addScout(){
        this.add.emit();
        console.log('ScoutListComponent: add');
    }

}
