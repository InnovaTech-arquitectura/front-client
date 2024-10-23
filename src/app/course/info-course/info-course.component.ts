import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, CourseService } from 'src/app/service/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-course',
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent implements OnInit {

  course: Course | null = null;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadCourse(parseInt(id, 10));
    }
  }

  loadCourse(id: number) {
    this.courseService.getCourseById(id).subscribe(
      (data: Course) => {
        this.course = data;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Falla al cargar los detalles del curso',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}
