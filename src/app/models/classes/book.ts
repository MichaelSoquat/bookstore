import { Rating } from "../enums/rating";
import { Read } from "../enums/read";
import { IBook } from "../interfaces/book";

export class Book implements IBook {
    id: number;
    title: string;
    author: string;
    genre: string;
    buyedAt: string;
    price: number;
    isRead: Read;
    rating: Rating;
    notice: string;
    description: string;

    constructor(id: number, title: string, author: string, genre: string, buyedAt: string, price: number, isRead: Read, rating: Rating, notice: string, description: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.buyedAt = buyedAt;
        this.price = price;
        this.isRead = isRead;
        this.rating = rating;
        this.notice = notice;
        this.description = description;
    }
}