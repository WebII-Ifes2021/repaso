import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { PiruloComponent } from './hijo/pirulo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatNativeDateModule } from '@angular/material/core';

import { ReactiveFormsModule } from '@angular/forms';
import { KmAMIllaPipe } from './pipes/km-a-millas';
import { AlumnoService } from './services/persona.service';

@NgModule({
	declarations: [ AppComponent, PadreComponent, PiruloComponent, KmAMIllaPipe ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSliderModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		MatNativeDateModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [ AlumnoService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
