import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {DownsmanAppComponent} from './downsman-app.component'
import {TeamService} from './teams/team-service'
import {NavBarComponent} from './nav/navbar.component'
import {TeamThumbnailComponent} from './teams/team-thumbnail.component'
import {TeamListComponent} from './teams/team-list.component'
import {TeamDetailsComponent} from './teams/team-details.component'
import {HelloComponent} from './sample/hello.component'
import {appRoutes} from './routes'
import {TeamNewComponent} from './teams/team-new.component'

@NgModule({
	imports: [BrowserModule,RouterModule.forRoot(appRoutes,{ useHash: true })],
	declarations: [
		NavBarComponent,
		DownsmanAppComponent,
		TeamListComponent,
		TeamDetailsComponent,
		TeamThumbnailComponent,
		HelloComponent,
		TeamNewComponent
	],
	providers: [
		TeamService
  ],
	bootstrap: [DownsmanAppComponent]
})

export class AppModule {}
