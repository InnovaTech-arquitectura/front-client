import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

export interface Course {
  id: number;
  title: string;
  date: string;
  modality: string;
  description: string;
  link: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = environment.baseApiUrl + '/api/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an issue retrieving data',
      confirmButtonText: 'OK'
    });
    return throwError(error);
  }
}
