import {Injectable} from '@angular/core'
import {IHikeClass} from './hike-class.model'

@Injectable()
export class HikeClassService {
    getHikeClasses(): IHikeClass[] {
        return CLASSES;
    }

    getHikeClass(id: number): IHikeClass {
        var c: IHikeClass = CLASSES.find(c => c.id === +id);
        return c;
    }
}


const CLASSES: IHikeClass [] = [
    {id: 1, name: 'Open'},
    {id: 2, name: 'S Class'},
    {id: 3, name: 'V Class'
    }];