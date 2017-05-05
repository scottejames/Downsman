import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {DownsmanAppComponent} from './downsman-app.component'

import {NavBarComponent} from './nav/navbar.component'
import {Error404Component} from './nav/404.component'

import {ScoutGroupService} from './scout-group/scout-group.service'

import {appRoutes} from './routes'

import {
    ProfileComponent,
    LoginComponent,
    AuthService

} from './user/index'
import {
    TeamRouteActivator,
    TeamService,
    TeamThumbnailComponent,
    TeamListComponent,
    TeamDetailsComponent,
    TeamNewComponent
} from './teams/index'

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        FormsModule,
        ReactiveFormsModule],
    declarations: [
        NavBarComponent,
        DownsmanAppComponent,
        TeamListComponent,
        TeamDetailsComponent,
        TeamThumbnailComponent,
        TeamNewComponent,
        Error404Component,
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        TeamRouteActivator,
        TeamService,
        AuthService,
        ScoutGroupService
    ],
    bootstrap: [DownsmanAppComponent]
})

export class AppModule {
}
