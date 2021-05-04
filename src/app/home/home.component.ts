import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/Models/BookModel';
import { BookService } from 'src/services/book.service';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { AuthorService } from 'src/services/author-service.service';
import { AuthorModel } from 'src/Models/AuthorModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: BookModel[] = [];  
  editForm!: FormGroup;
  authors : AuthorModel[] = [];

  addForm!: FormGroup;
  
  constructor(private service: BookService, private formBuilder: FormBuilder, private authorService : AuthorService) {
    this.createForm();
  
  }
 

  ngOnInit(): void {
    this.fetchData();
    this.getAllAuthors();
    console.log(this.books);
  }
 
  fetchData() {
    this.service.getDataFromApi().subscribe((data: BookModel[]) => {
      this.books = data;
      console.log(data);
    });
  }

  createForm() {
     this.addForm = this.formBuilder.group({
       name: ['', Validators.required ],
       authorId: ['', Validators.required ]
    });
  }



  delete(id: Number) {
    this.service.deleteEntity(id).subscribe(() => {
      this.fetchData();
    });
  }

  addEntity() {
    let model = this.addForm.value as BookModel;
    this.service.addEntity(model).subscribe((response) => {
      console.log(response);
      this.fetchData();
    });
  }

  getAllAuthors(){
    this.authorService.getAuthors().subscribe(res=> {
      console.log(res)
      this.authors = res
    })
  }


}
