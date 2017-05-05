import {Routes} from '@angular/router'

import {Error404Component} from './nav/404.component'

import {
    TeamRouteActivator,
    TeamListComponent,
    TeamDetailsComponent,
    TeamNewComponent,
} from './teams/index'

import{
    ProfileComponent,
    LoginComponent
} from './user/index'


export const appRoutes: Routes = [
    {path: '404', component: Error404Component},
    {path: 'teams', component: TeamListComponent},
    {path: 'teams/new', component: TeamNewComponent},
    {path: 'teams/:id', component: TeamDetailsComponent, canActivate: [TeamRouteActivator]},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},

    {path: '*', redirectTo: '/404', pathMatch: 'full'},
    {path: '', redirectTo: '/teams', pathMatch: 'full'}

]
