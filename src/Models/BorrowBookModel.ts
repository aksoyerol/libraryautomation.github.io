import { BookModel } from "./BookModel";
import { UserModel } from "./UserModel";

export interface BorrowBookModel{
    Id:Number,
    ReceivedDate:Date,
    DeliveryDate:Date,
    UserId:Number,
    User:UserModel,
    BookId:Number,
    Book:BookModel
}