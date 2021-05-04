import { AuthorModel } from "./AuthorModel";
import { BorrowBookModel } from "./BorrowBookModel";

export interface BookModel{
    id:Number,
    name:String,
    authorId:Number,
    author:AuthorModel,
    borrowBooks:BorrowBookModel[]
}