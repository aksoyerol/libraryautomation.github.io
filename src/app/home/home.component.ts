import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/Models/BookModel';
import { BookService } from 'src/services/book.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private service: BookService,private formBuilder : FormBuilder) {}
  editForm !: FormGroup
  ngOnInit(): void {
    this.validateForm()
    this.fetchData();
    console.log(this.books);
  }

  validateForm(){
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      authorId: ['', Validators.required]
    });
  }

  fetchData() {
    this.service.getDataFromApi().subscribe((data: BookModel[]) => {
      this.books = data;
      console.log(data);
    });
  }

  delete(id: Number) {
    this.service.deleteEntity(id).subscribe(()=>{
      this.fetchData()
    })
  }

  addEntity(){
    let model = this.editForm.value as BookModel
    this.service.addEntity(model).subscribe((response)=>{
      console.log(response)
      this.fetchData()
    })
  }
}
