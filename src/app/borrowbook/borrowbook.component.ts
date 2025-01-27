import { Component, OnInit } from '@angular/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BorrowbookService } from 'src/services/borrowbook.service';
import { BorrowBookModel } from 'src/Models/BorrowBookModel';
import { BookModel } from 'src/Models/BookModel';
import { UserModel } from 'src/Models/UserModel';
import { BookService } from 'src/services/book.service';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css'],
})
export class BorrowbookComponent implements OnInit {
  addForm!: FormGroup;
  borrowBooks: BorrowBookModel[] = [];
  editForm!: FormGroup;
  updateEntity!: BorrowBookModel;
  books: BookModel[] = [];
  users : UserModel[] = []

 
  constructor(
    private service: BorrowbookService,
    private formBuilder: FormBuilder,
    private bookService : BookService,
    private userService : UserService

  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.createForm()
  }

 
  ngOnInit(): void {
    this.getAllUsers()
    this.fetchData();
    this.getAllBooks()
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      deliveryDate: ['', Validators.required],
      receivedDate: ['', Validators.required],
      id: [],
      userId:[],
      bookId:[]
    });
  }

  delete(id: Number) {
    this.service.deleteEntity(id).subscribe(() => {
      this.fetchData();
    });
  }

  edit(item: BorrowBookModel) {
    this.addForm.patchValue({
      receivedDate: item.receivedDate,
      deliveryDate: item.deliveryDate,
      userId : item.userId,
      bookId : item.bookId,
      id: item.id,
    });
    console.log('IDDD ' + this.addForm.value.id);
  }

  fetchData() {
    this.service.getAllEntity().subscribe((data: BorrowBookModel[]) => {
      this.borrowBooks = data;
      console.log(data);
    });
  }

  editEntity() {
    this.service.getEntity(this.addForm.value.id).subscribe((response) => {});
    this.service.updateEntity(this.addForm.value).subscribe((res) => {
      this.fetchData();
    });
    console.log("Updating entity = " + (this.addForm.value as BorrowBookModel));
  }

  addEntity() {
   
    console.log("BU TARİH" + this.addForm.value.receivedDate)
    let model = this.addForm.value as BorrowBookModel
    this.service.addEntity(model).subscribe((response) => {
      console.log(response);
      this.fetchData();
    });
  }

  getAllUsers(){
    this.userService.getAllEntity().subscribe(res=>{
      this.users = res
    })
  }

  getAllBooks(){
    this.bookService.getDataFromApi().subscribe(res=>{
      this.books = res
    })
  }
}
