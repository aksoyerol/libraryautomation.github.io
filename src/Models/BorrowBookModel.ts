import { BookModel } from "./BookModel";
import { UserModel } from "./UserModel";

export interface BorrowBookModel{
    id:Number,
    receivedDate:String,
    deliveryDate:String,
    userId:Number,
    user:UserModel,
    bookId:Number,
    book:BookModel
}