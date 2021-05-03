import { BorrowBookModel } from "./BorrowBookModel";

export interface UserModel{
    Id:Number,
    Name:String,
    LastName:String,
    Adress:String,
    PhoneNumber:String,
    Email:String,
    BorrowBooks:BorrowBookModel[]
}