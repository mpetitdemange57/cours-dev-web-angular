import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'banana'
})
export class BananaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " banana";
  }

}
