import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

	constructor(private http: HttpClient) {}

	getAllCourses(): Observable<Course[]> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<Course[]>(this.apiUrl, { headers }).pipe(catchError(this.handleError));
	}

	getCourseById(id: number): Observable<Course> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<Course>(`${this.apiUrl}/${id}`, { headers }).pipe(catchError(this.handleError));
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
