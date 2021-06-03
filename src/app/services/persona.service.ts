import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class AlumnoService {
	private urlAlumno = environment.url + 'modules/alumno/';

	constructor(private http: HttpClient) {}

	// Trae todos los alumnos
	getAlumnos() {
		const header = {
			header: new HttpHeaders({
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk'
			})
		};
		return this.http.get('https://coding-challenge-api.aerolab.co/products',
         { headers: header.header });
	}

	// Trae un alumno a través de su id
	getAlumno(idAlumno) {
		return this.http.get(this.urlAlumno + 'alumno/' + idAlumno);
	}

	// Guarda un alumno nuevo
	guardarAlumno(alumno: any) {
		return this.http.post(this.urlAlumno + 'alumno', alumno);
	}

	// Modifica un alumno
	modificarAlumno(alumno: any) {
		return this.http.put(this.urlAlumno + 'alumno' + alumno.id, alumno);
	}
}
