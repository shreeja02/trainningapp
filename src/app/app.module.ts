import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { FilterPipe } from './filter.pipe';
import { HighlighterDirective } from './highlighter.directive';
import { ValidatorDirective } from './validator.directive';
import { StudentComponent } from './student/student.component';
import { StudentsearchPipe } from './studentsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ProductComponent,
    FilterPipe,
    HighlighterDirective,
    ValidatorDirective,
    StudentComponent,
    StudentsearchPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
