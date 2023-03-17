import { ProductCategory } from 'output/entities/ProductCategory';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    // Untuk masuk kedalam region kemudian service akan masuk kedalam repo defini dari regions
    @InjectRepository(ProductCategory)
    private serviceRepo: Repository<ProductCategory>,
  ) {}
  public async getProductById(id: number) {
    return await this.serviceRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        products: true,
      },
    });
  }
}
