import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Userusecase } from '../../../domain/usecases/userusecase';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

loginForm! : FormGroup;

public validationMessages = {
  email: [
    {type: 'pattern', message: 'Solo se permiten campos de tipo email'},
    {type: 'email', message: 'Solo se permiten campos de tipo email'},
    {type:'required', message: 'Este campo es requerido'},
  ],
  password: [
    {type:'required', message: 'Este campo es requerido'},
    {type: 'pattern', message: 'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial'},
    {type: 'minLenght', message:'Este campo debe tener por lo menos 9 caracteres'}
  ]
}
  constructor(private router : Router, private formBuilder: FormBuilder, private http: HttpClient, private _userUseCase:Userusecase) { }

  login() {

    if (this.loginForm.valid) {
      var user = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;

      this._userUseCase.login(user, password).subscribe((data:any) => {
        if(data) {
          localStorage.setItem('token',data.token);
          this.router.navigate(['/home'])
          return;
        }

      })

    }else {
    alert('El formulario no valido')
    return;
    }
  }
  ngOnInit(): void {
    //Crear variables en local storage, esta se debe eliminar con parametro permanece en las diferentes pantallas
    localStorage.setItem('mail', 'admin@OfflineAudioCompletionEvent.com');
    localStorage.setItem('password', 'Colombia2023*');

    //este alamacenamiento se elimina cuando se cierra la sesión, se maneja info mas delicada, no permanece en las diferentes pantallas
    sessionStorage.setItem('mail', 'admin@admin.com');
    //eliminar variables en LocalStorage
    localStorage.removeItem('mail');
    this.loginForm = this.formBuilder.group(
      {
        email: [
        '',
        [
          Validators.pattern(/[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i),
          Validators.email,
          Validators.required
        ]
       ],
       password: [
        '',
        [
          //Todas las validaciones se deben cumplir para que el campo sea un campo valido, por ejemplo la longitud debe decir 8 en las dos partes
          Validators.required,
          //Validators.minLength(8),
          //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
        ]
       ]
      }
    )
  }

  public get getControls() {
    return this.loginForm.controls
  }

  // login() {
  //   var user = this.loginForm.controls['email'].value;
  //   var password = this.loginForm.controls['password'].
  //   value;
  //   this.http
  //   if(this.loginForm.valid)
  //   {
  //   if (user == localStorage.getItem('email') && password == localStorage.getItem ('password')) {localStorage.setItem('token', `${user}-${password}`)
  //     this.router.navigate(['/'])
  //     return;
  //   }
  //   alert('Usuario o contraseña invalido intente de nuevo')
  //   return;
  // }
  // alert('El formulario no es valido')
  // return;
  // }

}
