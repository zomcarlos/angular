import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesComponent } from '../courses/courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CursosRoutingModule } from './cursos-routing.module';

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
