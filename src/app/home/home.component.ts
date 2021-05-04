import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/Models/BookModel';
import { BookService } from 'src/services/book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:BookModel[] = []
  constructor(private service : BookService) { }

  ngOnInit(): void {
    this.service.getDataFromApi().subscribe((data:BookModel[])=>{
      this.books = data;
      console.log(data)
    })
    console.log(this.books);
  }

}
