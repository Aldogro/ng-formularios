import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  // tslint:disable-next-line:ban-types
  usuario: Object = {
    nombre: 'Aldo',
    apellido: 'Rojas',
    email: 'aldogrojas5@gmail.com',
    pais: 'ARG',
    sexo: 'Masculino',
    acepta: false
  };

  paises = [
    {
      codigo: 'ARG',
      nombre: 'Argentina'
    },
    {
      codigo: 'ESP',
      nombre: 'Uruguay'
    },
    {
      codigo: 'BRA',
      nombre: 'Brasil'
    }
  ];

  sexos = ['Femenino', 'Masculino', 'Indefinido'];

  constructor() {}

  guardar(forma: NgForm) {
    console.log(forma);
  }
}
