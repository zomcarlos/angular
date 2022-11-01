import { Component, OnInit } from '@angular/core';
import { Course } from "../models/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {
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
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses = []; (initializer alternative)
  }

  ngOnInit(): void {
  }

}
