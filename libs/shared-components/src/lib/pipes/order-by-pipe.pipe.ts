import { Pipe, PipeTransform } from '@angular/core';
import { gameI } from '../models/shared.models';
import * as _ from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipePipe implements PipeTransform {
  transform(value: gameI[], order: string): gameI[] {
    return _.orderBy(value, ['name'], [order === 'Descendente' ? 'desc' : 'asc']);
  }
}
