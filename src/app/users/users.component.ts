import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm!: FormGroup;


  constructor(
    public formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(28)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8)]),
      school: new FormControl('', [Validators.required]),
      cellphone: new FormControl('')
    })

  }

  get getControl() {
    return this.userForm.controls;
  }

}
