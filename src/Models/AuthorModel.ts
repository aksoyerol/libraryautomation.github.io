import { BookModel } from "./BookModel";

export interface AuthorModel{
    Id:Number,
    Name:String,
    LastName:String,
    Books:BookModel[]
}