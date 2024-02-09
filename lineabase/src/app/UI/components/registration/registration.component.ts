import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInResponse, UserResponse } from '../../../domain/models/User/user-response';
import { User } from '../../../domain/models/User/user';
import { Userusecase } from '../../../domain/usecases/userusecase';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {


registrationForm! : FormGroup;

public validationMessages = {
  email: [
    {type: 'pattern', message: 'Solo se permiten campos de tipo email'},
    {type: 'email', message: 'Solo se permiten campos de tipo email'},
    {type:'required', message: 'Este campo es requerido'}
  ],
  password: [
    {type:'required', message: 'Este campo es requerido'},
    {type: 'pattern', message: 'La contraseña debe tener por lo menos 8 caracteres, una minuscula, una mayuscula y un caracter especial'},
    {type: 'minLenght', message:'Este campo debe tener por lo menos 9 caracteres'}
  ],
  name: [
    {type:'required', message: 'Este campo es requerido'}
  ],
  lastname: [
    {type:'required', message: 'Este campo es requerido'}
  ]
}

constructor(private formBuilder: FormBuilder,
  private router: Router,
  private http:HttpClient,
  private _userUseCase: Userusecase) { }

  public get getControls() {
    return this.registrationForm.controls
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z\s]+$/)
          ]
        ],
        identification: [
          '',
          [
            Validators.required,
          ]
        ],
        phone: [
          '',
          [
            Validators.required,
          ]
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/)
          ]
        ],
        terms: [
          '',
          [
            Validators.requiredTrue,
          ]
        ]
      }
    )

  }
  registration() {

    if(this.registrationForm.valid) {
    var user: User = {
      email : this.registrationForm.controls['email'].value,
      name : this.registrationForm.controls['name'].value,
      password: this.registrationForm.controls['password'].value,
      phone: this.registrationForm.controls['phone'].value,
      identification: this.registrationForm.controls['identification'].value
    }
      //this.router.navigate(['/fullscreen/login'])
      //return;
      this._userUseCase.signup(user).subscribe(
        (data: UserResponse) => {
          if (data) {
          alert(`El usuario ${data.user.name} fue creado con exito`)
          this.router.navigate(['/fullscreen/login'])
          return;
        }
       }
      )
  }
  else {
  alert('El formulario no es valido')
  return;
  }
  }
  }

