import {Routes} from '@angular/router'
import {TeamListComponent} from './teams/team-list.component'
import {TeamDetailsComponent} from './teams/team-details.component'
import {TeamNewComponent} from './teams/team-new.component'

export const appRoutes:Routes = [
  { path: 'teams', component: TeamListComponent},
  { path: 'teams/new', component: TeamNewComponent},
  { path: 'teams/:id', component: TeamDetailsComponent},
  { path: '', redirectTo: '/teams', pathMatch: 'full'}

]
