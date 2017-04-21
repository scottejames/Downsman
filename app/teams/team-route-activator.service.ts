
import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { TeamService } from './team.service'

@Injectable()
export class TeamRouteActivator implements CanActivate{
  constructor(private teamService: TeamService, private router: Router) {

  }

  canActivate (route: ActivatedRouteSnapshot) {
    const teamExists = !!this.teamService.getTeam(+route.params['id'])

    if(!teamExists)
      this.router.navigate(['/404'])

    return teamExists
  }
}
