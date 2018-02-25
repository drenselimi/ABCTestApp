import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'Moment';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date|moment.Moment, ...args: any[]): any {
    let [format] = args;
    return moment(value).format(format);
  }

}