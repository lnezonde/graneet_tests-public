import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CityController } from './controller/city.controller';
import { CityEntity } from './entity/city.entity';
import { CityService } from './service/city/city.service';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService],
  exports: [TypeOrmModule]
})
export class CityModule {
  constructor(private dataSource: DataSource) {}
}
