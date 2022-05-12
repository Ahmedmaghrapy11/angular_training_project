import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthonticationService } from '../authontication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  msg:string="";


  firstName = new FormControl(null,
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[A-Z]/)
    ]);
  lastName = new FormControl(null,
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[A-Z]/)
    ]);
  age = new FormControl(null, [
    Validators.required,
    Validators.min(12),
    Validators.max(45)
  ]);
  email = new FormControl(null, [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl(null, [
    Validators.required
  ]);

  form = new FormGroup({
    fName : this.firstName,
    lName: this.lastName,
    age: this.age,
    mail: this.email,
    pass: this.password
  });

  handleFormData(userForm:any) {
    if(userForm.valid == true) {
      console.log(userForm.value);
      this._AuthonticationService.register(userForm.value).subscribe({
        next: (res)=>{console.log(res)
          this.msg = res.message
        },
        error: (er)=>{console.log(er)}
      });
    }

  }


  constructor(private _AuthonticationService:AuthonticationService) { }

  ngOnInit(): void {
  }

}
