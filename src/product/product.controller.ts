import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
  constructor(private Services: ProductService) {}

  @Get('/:id')
  public async getOneCategory(@Param('id') id: number) {
    return await this.Services.getProductById(id);
  }
}
