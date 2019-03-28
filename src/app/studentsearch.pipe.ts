import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student/students';

@Pipe({
  name: 'studentsearch'
})
export class StudentsearchPipe implements PipeTransform {

  transform(value: Student[], args: string): Student[] {
    console.log('called');
    console.log(args);
    return value.filter(x=>x.name.startsWith(args));
  }

}
