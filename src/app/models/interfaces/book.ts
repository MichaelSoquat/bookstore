import { Rating } from "../enums/rating";
import { Read } from "../enums/read";


export interface IBook {
    id?: number;
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
}