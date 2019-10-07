import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';


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
        nombre: new FormControl( '' , [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]/*, reglas de validacion asíncrona */),
        apellido: new FormControl( '' , [
                                            Validators.required,
                                            Validators.minLength(3),
                                            this.noHerrera
                                          ])
      }),
      email: new FormControl( '' ,
                              [
                                Validators.required,
                                // tslint:disable-next-line:quotemark
                                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                              ]),
      pasatiempos: new FormArray([
        new FormControl('correr', Validators.required),
        new FormControl('comer', Validators.required),
        new FormControl('saltar', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });

    this.forma.get('username').valueChanges
      .subscribe( data => {
        console.log(data);
      });

    this.forma.get('password2').setValidators([
      Validators.required,
      this.noIgual.bind( this.forma )
    ]);
  }

  agregarPasatiempo() {
    (this.forma.controls.pasatiempos as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  noHerrera( control: FormControl ): { [s: string]: boolean } {
    if ( control.value === 'herrera' ) {
      return {
        noherrera: true
      };
    }
    return null;
  }

  noIgual( control: FormControl ): { [s: string]: boolean } {

    // tslint:disable-next-line:no-string-literal
    if ( control.value !== this['controls'].password1.value ) {
      return {
        noiguales: true
      };
    }
    return null;
  }

  existeUsuario( control: FormControl ): Promise<any> | Observable<any> {
    const promesa = new Promise(
      ( resolve, reject ) => {
        setTimeout( () => {
          if (control.value === 'strider') {
            resolve({existe: true});
          } else {
            resolve( null );
          }
        }, 1000);
      }
    );

    return promesa;
  }

  guardarCambios() {
    console.log(this.forma.value);
  }

}
