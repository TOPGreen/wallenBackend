import {IsNotEmpty} from 'class-validator';

export class PurchaseDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    comment: string;
}
