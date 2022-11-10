import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {first, Observable, tap} from 'rxjs';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/api/courses';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //faz com que após uma requisição, o comando seja encerrado
      //delay(50), //atrasaria o funcionamento da barra de progresso em X ms;
      tap(courses => console.log(courses))
    );
  }

  save(record: Course):Observable<Course[]>{
    return this.httpClient.post<Course[]>(this.API, record).pipe(first());
  }

}
