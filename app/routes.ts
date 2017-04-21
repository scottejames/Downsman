import {Routes} from '@angular/router'
import {TeamListComponent} from './teams/team-list.component'
import {TeamDetailsComponent} from './teams/team-details.component'
import {TeamNewComponent} from './teams/team-new.component'
import {Error404Component} from './nav/404.component'
import {TeamRouteActivator} from './teams/team-route-activator.service'


export const appRoutes:Routes = [
  { path: '404', component: Error404Component },
  { path: 'teams', component: TeamListComponent},
  { path: 'teams/new', component: TeamNewComponent},
  { path: 'teams/:id', component: TeamDetailsComponent, canActivate: [TeamRouteActivator]},
  { path: '*', redirectTo: '/404', pathMatch: 'full'},
  { path: '', redirectTo: '/teams', pathMatch: 'full'},


]
