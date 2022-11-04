import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from './../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/acourses.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //faz com que após uma requisição, o comando seja encerrado
      delay(5000), //atrasa o funcionamento da barra de progresso em X ms;
      tap(courses => console.log(courses))
    );
  }
}
