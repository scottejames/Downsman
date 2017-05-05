import { Component,OnInit } from '@angular/core'
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import {Router} from '@angular/router'
import {ScoutGroupService} from "../scout-group/scout-group.service";
import {IScoutGroup} from '../scout-group/scout-group.model'

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}    
        .error input {background-color: #E05C65}
        .error ::-webkit-input-placeholder{color:#999;}
        .error ::-moz-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :-ms-input-placeholder {color:#999;}
        `]

})
export class ProfileComponent implements OnInit{
    profileForm:FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;
    private group: FormControl;

    // data for the selector
    scoutGroups : IScoutGroup[] = [];

    constructor(private auth:AuthService,private router:Router, private scoutGroupService:ScoutGroupService){

    }
    ngOnInit() {
        this.scoutGroups = this.scoutGroupService.getScoutGroups();
        console.log(this.auth.currentUser)
        this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required);
        this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
        this.group = new FormControl(this.auth.currentUser.scoutGroup.id, Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            group: this.group
        });
    }
    logout(){
        this.auth.currentUser=null;
        this.router.navigate(['user/login']);

    }
    cancel(){
        this.router.navigate(['teams']);
    }
    saveProfile(formValues){
        this.auth.updateCurrentUser(formValues.firstName,formValues.lastName,formValues.group);
        this.router.navigate(['teams']);
        console.log(formValues.group    )
    }

    validateFirstName() {
        return  this.firstName.valid || this.firstName.untouched;
    }
    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }
}