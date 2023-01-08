import { Rating } from "../enums/rating";
import { Read } from "../enums/read";
import { IBook } from "../interfaces/book";

export class Book implements IBook {
    id: number;
    title: string;
    author: string;
    genre: string;
    buyedAt: string;
    isRead: Read;
    rating: Rating;
    notice: string;
    description: string;
    buy_place: string;
    payed: number;
    normal_price: number;

    constructor(id: number, title: string, author: string, genre: string, buyedAt: string, 
        isRead: Read, rating: Rating, notice: string, description: string, buy_place: string, payed: number, normal_price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.buyedAt = buyedAt;
        this.isRead = isRead;
        this.rating = rating;
        this.notice = notice;
        this.description = description;
        this.buy_place = buy_place;
        this.payed = payed;
        this.normal_price = normal_price;
    }
}