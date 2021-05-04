import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorModel } from 'src/Models/AuthorModel';
import { AuthorService } from 'src/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  books: AuthorModel[] = [];
  editForm!: FormGroup;
  authors: AuthorModel[] = [];
  addForm!: FormGroup;
  updateEntity!: AuthorModel;
  constructor(
    private service: AuthorService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getAuthors().subscribe((data: AuthorModel[]) => {
      this.authors = data;
      console.log(data);
    });
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      id: [],
    });
  }

  delete(id: Number) {
    this.service.deleteEntity(id).subscribe(() => {
      this.fetchData();
    });
  }

  edit(item: AuthorModel) {
    this.addForm.patchValue({
      name: item.name,
      lastName:item.lastName,
      id: item.id,
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
    let model = this.addForm.value as AuthorModel;
    this.service.addEntity(model).subscribe((response) => {
      console.log(response);
      this.fetchData();
    });
  }
}
