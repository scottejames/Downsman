import {HikeClassService} from './hike-class.service'
import {IHikeClass} from './hike-class.model'

describe('HikeClassService', () => {
    let hcs = null;
    beforeEach(() => {
        hcs = new HikeClassService();
    })
    describe('testing i have three classes', () => {
        let hikesClasses = hcs.getHikeClasses();
        expect(hikesClasses.length).toBe(3);
    })
});