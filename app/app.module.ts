import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {DownsmanAppComponent} from './downsman-app.component'

import {NavBarComponent} from './nav/navbar.component'
import {Error404Component} from './nav/404.component'

import {
    ScoutGroupService,
    HikeClassService,
    TeamService,
    UserService
} from './data/index'



import {appRoutes} from './routes'
import {AuthService} from './shared/auth.service'
import {
    ProfileComponent,
    LoginComponent,

} from './user/index'
import {
    TeamRouteActivator,
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
        ScoutGroupService,
        HikeClassService,
        UserService
    ],
    bootstrap: [DownsmanAppComponent]
})

export class AppModule {
}
