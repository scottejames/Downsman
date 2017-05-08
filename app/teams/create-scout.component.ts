import {Output, Component, OnInit, EventEmitter} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

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
    scoutForm: FormGroup;
    name: FormControl;
    age: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.age = new FormControl('', Validators.required);
        this.scoutForm = new FormGroup({
            name: this.name,
            age: this.age
        })
    }

    saveScout(formValues) {
        console.log(formValues)
        this.save.emit(formValues)
    }

    cancelScout() {
        this.cancel.emit();
        console.log('cancelled');
    }
}

