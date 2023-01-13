import { Rating } from "../enums/rating";
import { Read } from "../enums/read";
import { IBook } from "../interfaces/book";

export class Book implements IBook {
    id: number;
    title: string;
    author: string;
    genre: string;
    buyed_at: string;
    is_read: Read;
    rating: Rating;
    notice: string;
    description: string;
    buy_place: string;
    payed: number;
    normal_price: number;

    constructor(id: number, title: string, author: string, genre: string, buyed_at: string,
        is_read: Read, rating: Rating, notice: string, description: string, buy_place: string, payed: number, normal_price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.buyed_at = buyed_at;
        this.is_read = is_read;
        this.rating = rating;
        this.notice = notice;
        this.description = description;
        this.buy_place = buy_place;
        this.payed = payed;
        this.normal_price = normal_price;
    }

    get serializedBook(): IBook {
        return {
            title: this.title,
            author: this.author,
            genre: this.genre,
            buyed_at: this.buyed_at,
            is_read: this.is_read,
            rating: this.rating,
            notice: this.notice,
            description: this.description,
            buy_place: this.buy_place,
            payed: this.payed,
            normal_price: this.normal_price
        }
    }

}