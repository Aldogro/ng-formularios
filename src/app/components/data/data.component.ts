import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  forma: FormGroup;

  usuario = {
    nombrecompleto: {
      nombre: 'Aldo',
      apellido: 'Rojas'
    },
    email: 'aldogrojas5@gmail.com'
  }

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombre: new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(3)
                                  ]/*, reglas de validacion asíncrona */),
      apellido: new FormControl('Rojas', [
                                          Validators.required,
                                          Validators.minLength(3)
                                        ]),
      email: new FormControl('aldo.rojas@ecloudsolutions.com',
                              [
                                Validators.required,
                                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                              ])
    });
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }

}
