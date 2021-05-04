import { BorrowBookModel } from "./BorrowBookModel";

export interface UserModel{
    id:Number,
    name:String,
    lastName:String,
    adress:String,
    phoneNumber:String,
    email:String,
    borrowBooks:BorrowBookModel[]
}