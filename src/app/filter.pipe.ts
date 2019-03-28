import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './todo/task';
import { ProductModel } from './product/productClass';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: ProductModel[], args: string): ProductModel[] {
      return value.filter( el => el.pro_name.startsWith(args));
  }

}
