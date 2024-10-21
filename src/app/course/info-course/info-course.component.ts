import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-course',
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
   
  ) {
    /*this.formCourse =  {
      id: 0,
      link: '',
      description: '',
      score: 0,
      date: new Date(),
      title: '',
      places: 0,
      modality: '',
    }*/
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      
      });
    }
  
}

