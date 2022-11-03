import { Injectable } from '@angular/core';

import { Course } from './../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

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
