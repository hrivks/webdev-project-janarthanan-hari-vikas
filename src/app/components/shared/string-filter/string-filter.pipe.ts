import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

  transform(items: string[], filter?: string): string[] {
    if (!items || !filter) {
      return items;
    } else {
      filter = filter.toLowerCase();
      return items.filter((i) => i.toLowerCase().indexOf(filter) > -1);
    }

  }

}
