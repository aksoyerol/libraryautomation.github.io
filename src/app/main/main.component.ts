import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from 'src/Models/BookModel';
import { BookService } from 'src/services/book.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient, private service: BookService) {}
  books: BookModel[] = []
 
  ngOnInit(): void {
    this.service.getDataFromApi().subscribe((data) => {
      this.books = data
    });
    console.log(this.books + 'asdas');
  }

  getDataFromService() {
    this.service.getDataFromApi().subscribe((data) => {
      this.books = data
    });
  }
}
