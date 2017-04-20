import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {DownsmanAppComponent} from './downsman-app.component'
import {TeamService} from './teams/team-service'
import {NavBarComponent} from './nav/navbar.component'
import {TeamThumbnailComponent} from './teams/team-thumbnail.component'
import {TeamListComponent} from './teams/team-list.component'
import {HelloComponent} from './sample/hello.component'
import {appRoutes} from './routes'


@NgModule({
	imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
	declarations: [
		NavBarComponent,
		DownsmanAppComponent,
		TeamListComponent,
		TeamThumbnailComponent,
		HelloComponent
	],
	providers: [
		TeamService
  ],
	bootstrap: [DownsmanAppComponent]
})

export class AppModule {}
