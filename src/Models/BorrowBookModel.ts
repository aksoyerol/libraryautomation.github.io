import { BookModel } from "./BookModel";
import { UserModel } from "./UserModel";

export interface BorrowBookModel{
    id:Number,
    receivedDate:Date,
    deliveryDate:Date,
    userId:Number,
    user:UserModel,
    bookId:Number,
    book:BookModel
}