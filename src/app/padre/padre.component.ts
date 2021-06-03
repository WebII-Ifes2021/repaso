import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KmAMIllaPipe } from './../pipes/km-a-millas';
import { AlumnoService } from './../services/persona.service';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: [ './padre.component.css' ],
	providers: [ KmAMIllaPipe ]
})
export class PadreComponent implements OnInit {
	autoForm: FormGroup;
	redeem: any[] = [];

	valorButton = '';

	nombre = 'diego maradona';
	distancia = 1000;
	distanciaEnMillas: number;

	fecha = new Date();
	constructor(private alumnoService: AlumnoService, private kmPipe: KmAMIllaPipe, private fb: FormBuilder) {}

	ngOnInit(): void {
		this.distanciaEnMillas = this.kmPipe.transform(this.distancia);
		this.initAutoForm();

		this.getAlumnos();
	}

	getAlumnos() {
		this.alumnoService.getAlumnos().subscribe((response: any) => {
			debugger;
			this.redeem = response;
		});
	}

	initAutoForm() {
		this.autoForm = this.fb.group({
			valorBtn: [ '', [ Validators.required ] ]
			// color: '',
			// patente: '',
			// stereo: this.fb.group({
			// 	marca: '',
			// 	potencia: ''
			// })
		});
	}

	guardar() {
		debugger;
		// this.autoForm.value;
		this.valorButton = this.autoForm.value.valorBtn;
	}

	onRecibePadre(event: string) {
		debugger;
		this.valorButton = event;
	}
}
