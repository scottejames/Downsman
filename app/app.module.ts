import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {DownsmanAppComponent} from './downsman-app.component'
import {NavBarComponent} from './nav/navbar.component'
import {HelloComponent} from './sample/hello.component'
import {appRoutes} from './routes'
import {Error404Component} from './nav/404.component'
import {AuthService} from './user/auth.service'

import {
    TeamRouteActivator,
    TeamService,
    TeamThumbnailComponent,
    TeamListComponent,
    TeamDetailsComponent,
    TeamNewComponent
} from './teams/index'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true})],
    declarations: [
        NavBarComponent,
        DownsmanAppComponent,
        TeamListComponent,
        TeamDetailsComponent,
        TeamThumbnailComponent,
        HelloComponent,
        TeamNewComponent,
        Error404Component,
    ],
    providers: [
        TeamService,
        TeamRouteActivator,
        AuthService
    ],
    bootstrap: [DownsmanAppComponent]
})

export class AppModule {
}
