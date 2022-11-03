import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list():Course[] {
    return[{
      _id: "01",
      name: "Angular",
      category: "Frontend"
      //table sample to be exhibited;
    },
    {
      _id: "02",
      name: "JavaScript",
      category: "Backend"
    }
  ]
  }
}
