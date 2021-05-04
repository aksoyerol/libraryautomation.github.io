import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/Models/UserModel';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: UserModel[] = [];
  editForm!: FormGroup;
  authors: UserModel[] = [];
  addForm!: FormGroup;
  updateEntity!: UserModel;
  constructor(private service: UserService, private formBuilder: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getAllEntity().subscribe((data: UserModel[]) => {
      this.users = data;
      console.log(data);
    });
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      adress: ['', Validators.required],
      id: [],
    });
  }

  delete(id: Number) {
    this.service.deleteEntity(id).subscribe(() => {
      this.fetchData();
    });
  }

  edit(item: UserModel) {
    this.addForm.patchValue({
      name: item.name,
      id: item.id,
      lastName: item.lastName,
      phoneNumber: item.phoneNumber,
      email: item.email,
      adress: item.adress,
    });
    console.log('IDDD ' + this.addForm.value.id);
  }

  editEntity() {
    this.service.getEntity(this.addForm.value.id).subscribe((response) => {});
    this.service.updateEntity(this.addForm.value).subscribe((res) => {
      this.fetchData();
    });
    console.log(this.updateEntity);
  }

  addEntity() {
    let model = this.addForm.value as UserModel;
    this.service.addEntity(model).subscribe((response) => {
      console.log(response);
      this.fetchData();
    });
  }
}
