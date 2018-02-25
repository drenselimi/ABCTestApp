import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectStatus'
})
export class StatusPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    switch (value) {
      case "ACTIVE":
        return 'Active';
      case "NOT_ACTIVE":
        return 'Not Active';
      default:
        break;
    }
    return null;
  }

}