import { AuthorModel } from "./AuthorModel";
import { BorrowBookModel } from "./BorrowBookModel";

export interface BookModel{
    Id:Number,
    Name:String,
    AuthorId:Number,
    Author:AuthorModel,
    BorrowBooks:BorrowBookModel[]
}