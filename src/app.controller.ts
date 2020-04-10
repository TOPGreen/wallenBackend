import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {InMemoryDBService} from '@nestjs-addons/in-memory-db';
import {Purchase} from './Purchase';
import {PurchaseDTO} from './PurchaseDTO';

@Controller()
export class AppController {
    constructor(
        private purchasesService: InMemoryDBService<Purchase>
    ) {
    }

    @Get()
    getAll(): Purchase[] {
        return this.purchasesService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: number): Purchase {
        return this.purchasesService.get(id);
    }

    @Post('seed')
    seed(): Purchase[] {
        const recordFactory = (idx: number): Partial<Purchase> => (
            {
                id: idx,
                title: `Title-${idx}`,
                price: Number(`${idx}`),
                date: new Date(Date.now()),
                comment: 'some comment'
            }
        );

        this.purchasesService.seed(recordFactory, 5);

        return this.purchasesService.getAll();
    }

    @Post()
    create(@Body() model: PurchaseDTO): Purchase {
      return this.purchasesService.create(model);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.purchasesService.delete(id);
    }
}
