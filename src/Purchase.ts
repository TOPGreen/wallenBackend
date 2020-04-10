import {InMemoryDBEntity} from '@nestjs-addons/in-memory-db';

export interface Purchase extends InMemoryDBEntity {
    title: string;
    price: number;
    date: Date;
    comment: string;
}
