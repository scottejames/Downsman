import {Output, Input,Component, OnInit, EventEmitter} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {TeamService} from "../data/team.service";

@Component({
    selector: 'create-scout',
    templateUrl: 'app/teams/create-scout.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}    
        .error input {background-color: #E05C65}
        .error ::-webkit-input-placeholder{color:#999;}
        .error ::-moz-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :-ms-input-placeholder {color:#999;}
        `]
})
export class CreateScoutComponent implements OnInit {
    @Output() save = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Input() scoutId : number;
    @Input() scoutName: string;
    @Input() scoutAge: number;

    scoutForm: FormGroup;
    nameCtrl: FormControl;
    ageCtrl: FormControl;
    idCtrl : FormControl;


    ngOnInit() {
        if (!this.scoutId) {
            this.nameCtrl = new FormControl('', Validators.required);
            this.ageCtrl = new FormControl('', Validators.required);
            this.idCtrl = new FormControl('');
        } else {
            this.nameCtrl = new FormControl(this.scoutName, Validators.required);
            this.ageCtrl = new FormControl(this.scoutAge, Validators.required);
            this.idCtrl = new FormControl(this.scoutId);

        }
        this.scoutForm = new FormGroup({
            name: this.nameCtrl,
            age: this.ageCtrl,
            id: this.idCtrl
        })
    }

    saveScout(formValues) {
        this.save.emit(formValues)
    }

    cancelScout() {
        this.cancel.emit();
    }
}

