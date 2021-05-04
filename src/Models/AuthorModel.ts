import { BookModel } from "./BookModel";

export interface AuthorModel{
    id:Number,
    name:String,
    lastName:String,
    books:BookModel[]
}