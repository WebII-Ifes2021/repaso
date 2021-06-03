import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pirulo',
	templateUrl: './pirulo.component.html',
	styleUrls: [ './pirulo.component.css' ]
})
export class PiruloComponent implements OnInit {
	@Input() txtButton: any;

	@Output() btnEvent = new EventEmitter<string>();

	constructor() {}

	ngOnInit(): void {
		this.txtButton = 'Nada';
	}

	devolverAlPadre() {
		this.btnEvent.emit('Viene del hijo de nuevoooooooo');
	}
}
