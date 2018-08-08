import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default class Month {
    constructor(month, year) {

        let date = moment([year, month])

        this.start = moment([year, month])
        this.end = this.start.clone().endOf('month')

        this.month = month;
        this.year = year;


    }

    getWeekStart() {
        return this.start.weekday()
    }

    getDays() {
        //console.log(Array.from(moment.range(this.start, this.end).by('days', { step: 1 })));
        return Array.from(moment.range(this.start, this.end).by('days', { step: 1 }));
    }

}