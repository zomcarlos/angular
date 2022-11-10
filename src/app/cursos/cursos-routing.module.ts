import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "../courses/courses/courses.component";
import {CourseFormComponent} from "../courses/course-form/course-form.component";

const routes: Routes = [
  { path:'', component:CoursesComponent},
  { path:'new', component:CourseFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
