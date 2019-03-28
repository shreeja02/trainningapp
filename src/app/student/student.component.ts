import { Component, OnInit } from '@angular/core';
import { Student } from './students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

arrStudent:Student[]=[
  new Student(1,'shreeja','ahmedabad','Absent'),
  new Student(2,'drashti','baroda','Present')

];
flag:boolean=true;
flag1:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    if(this.flag==false){
      this.flag=true;
    }
    else{
      this.flag=false;
    }
  }
  addStudent(id,name,city,attendance){
    this.arrStudent.push(new Student(id,name,city,attendance));
    this.flag=true;
  }
  onUpdate(item){
    if(item.attendance=="Present"){
      item.attendance='Absent'
    }
    else{
      item.attendance='Present'
    }
  }
  onDelete(item){
    console.log('called'+item);
  this.arrStudent.splice(this.arrStudent.indexOf(item),1);
  }
}
