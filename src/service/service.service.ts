import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regions } from 'output/entities/Regions';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Regions) private serviceRepo: Repository<Regions>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({ where: { regionId: id } });
  }

  public async Create(name: string) {
    try {
      const region = await this.serviceRepo.save({
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Upload(file, name: string) {
    try {
      const region = await this.serviceRepo.save({
        regionName: name,
        regionPhoto: file.originalname,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, name: string) {
    try {
      const region = await this.serviceRepo.update(id, {
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const region = await this.serviceRepo.delete(id);
      return region;
    } catch (error) {
      return error.message;
    }
  }
}
