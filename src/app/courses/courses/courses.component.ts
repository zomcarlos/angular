import { Course } from './../models/course';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //courses : Course[] = [];
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

//coursesService: CoursesService;


  constructor(private coursesService: CoursesService) {
    //this.courses = []; (initializer alternative)
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();

    //this.coursesService.list().subscribe(courses => this.courses = courses);
  }

  ngOnInit(): void {
  }

}
