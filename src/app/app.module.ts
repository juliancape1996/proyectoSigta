import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { FooterComponent } from './static/footer/footer.component';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

import { RouterModule } from '@angular/router';

// httpclientModule para poder hacer las consultas de la api 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesoresModule } from './profesores/profesores.module';
import { MateriasModule } from './materias/materias.module';
import { CompetenciaModule } from './competencia/competencia.module';
import { AulasModule } from './aulas/aulas.module';
import { AsignacionesModule } from './asignaciones/asignaciones.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    EstudiantesModule,
    ProfesoresModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MateriasModule,
    CompetenciaModule,
    AulasModule,
    AsignacionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
