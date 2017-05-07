import { Component, Input, OnChanges } from '@angular/core';
import { IScout } from '../data/team.model';
@Component ({
    selector : 'scout-list',
    templateUrl: '/app/teams/scout-list.component.html',

})
export class ScoutListComponent {

    @Input() scouts : IScout[];
    ngOnInit() {
        console.log(this.scouts);
    }
}
