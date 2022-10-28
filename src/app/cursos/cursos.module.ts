import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import {CoursesComponent} from "../courses/courses/courses.component";
import {AppMaterialModule} from "../shared/app-material/app-material.module";

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule
  ]
})
export class CursosModule { }
