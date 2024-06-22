import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'dateRangeFilter'
})
export class DateRangeFilterPipe implements PipeTransform {

  transform(items: any[], dateFrom: string, dateTo: string): any[] {
    if (!items) return [];

    let fromDate = dateFrom ? new Date(dateFrom) : new Date(-8640000000000000); // Negative infinity
    let toDate = dateTo ? new Date(dateTo) : new Date(8640000000000000); // Positive infinity

    return items.filter(item => {
      let itemDate = new Date(item.date);
      return itemDate >= fromDate && itemDate <= toDate;
    });
  }
}
