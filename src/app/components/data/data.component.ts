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
  };

  constructor() {

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup ({
        nombre: new FormControl( 'a' , [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]/*, reglas de validacion asíncrona */),
        apellido: new FormControl( 'b' , [
                                            Validators.required,
                                            Validators.minLength(3)
                                          ])
      }),
      email: new FormControl( 'asdf@asdf.com' ,
                              [
                                Validators.required,
                                // tslint:disable-next-line:quotemark
                                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                              ])
    });
  }

  guardarCambios() {
    console.log(this.forma.get('nombrecompleto.nombre').hasError('minlength'));
    this.forma.setValue(this.usuario);
  }

}
