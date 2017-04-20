import {Routes} from '@angular/router'
import {TeamListComponent} from './teams/team-list.component'
import {TeamDetailsComponent} from './teams/team-details.component'


export const appRoutes:Routes = [
  { path: 'teams', component: TeamListComponent},
  { path: 'teams/:id', component: TeamDetailsComponent},
  { path: '', redirectTo: '/teams', pathMatch: 'full'}

]
