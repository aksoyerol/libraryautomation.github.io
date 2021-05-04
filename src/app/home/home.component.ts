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
import { AuthorService } from 'src/services/author.service';
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
  updateEntity !: BookModel
  constructor(private service: BookService, private formBuilder: FormBuilder, private authorService : AuthorService) {
    this.createForm();
  
  }
  ngOnInit(): void {
    this.fetchData();
    this.getAllAuthors();
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
       authorId: ['', Validators.required ],
       id :[]
    });
  }

  delete(id: Number) {
    this.service.deleteEntity(id).subscribe(() => {
      this.fetchData();
    });
  }

  edit(item:BookModel){
    this.addForm.patchValue({
      name: item.name,
      id:item.id,
      authorId : item.authorId
    })
    console.log("IDDD " +this.addForm.value.id)
  }
  
  editEntity(){
     this.service.getEntity(this.addForm.value.id).subscribe(response=>{
       
      })
      this.service.updateEntity(this.addForm.value).subscribe(res=>{
        this.fetchData()
      })
      console.log(this.updateEntity)
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
