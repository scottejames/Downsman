import {Routes} from '@angular/router'
import {TeamListComponent} from './teams/team-list.component'


export const appRoutes:Routes = [
  //{ path: 'team/new', component: CreateEventComponent , canDeactivate : ['canDeactiveCreateEvent']},
  { path: 'teams', component: TeamListComponent},
  //{ path: 'teams/:id', component: TeametailsComponent, canActivate: [EventRouteActivator]},
  //{ path: '404', component: Error404Component },
  { path: '', redirectTo: '/teams', pathMatch: 'full'}

]
