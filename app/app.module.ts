import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {DownsmanAppComponent} from './downsman-app.component'

import {NavBarComponent} from './nav/navbar.component'

@NgModule({
	imports: [BrowserModule,RouterModule],
	declarations: [
		NavBarComponent,
		DownsmanAppComponent
	],
	providers: [
  ],
	bootstrap: [DownsmanAppComponent]
})

export class AppModule {}
