import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import {CoursesComponent} from "../courses/courses/courses.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule
  ]
})
export class CursosModule { }
