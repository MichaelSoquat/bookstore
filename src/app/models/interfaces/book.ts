import { Rating } from "../enums/rating";
import { Read } from "../enums/read";


export interface IBook {
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
}