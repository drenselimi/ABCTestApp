import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus'
})
export class StatusPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    switch (value) {
      case "1":
        return 'New';
      case "2":
        return 'Process';
      case "3":
        return 'Completed';
      default:
        break;
    }
    return null;
  }

}