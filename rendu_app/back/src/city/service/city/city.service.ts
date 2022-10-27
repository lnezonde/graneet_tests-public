import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityDto } from 'src/city/dto/city.dto';
import { CityEntity } from 'src/city/entity/city.entity';
import { DataSource, ILike, LessThan, Like, MoreThan, Repository } from 'typeorm';
import * as data from 'data/codes-postaux.json';

const fs = require('fs')

const path = 'database_is_created'

@Injectable()
export class CityService {
	constructor(
		private dataSource: DataSource,

		@InjectRepository(CityEntity)
		private citysRepository: Repository<CityEntity>

	) {}

	async createMany(cities: CityDto[]) {
		const queryRunner = this.dataSource.createQueryRunner();

		await queryRunner.connect();
		await queryRunner.startTransaction();
		try {
			for (const city of cities) {
				await queryRunner.manager.save(this.citysRepository.create(city));
			}
		  await queryRunner.commitTransaction();
		} catch (err) {
		  console.log(err);
		  await queryRunner.rollbackTransaction();
		} finally {
		  await queryRunner.release();
		  console.log("Cities database is created!");
		}
	  }

	create(city: CityDto): Promise<CityDto> {
		return this.citysRepository.save(city);
	}

	findAll(): Promise<CityDto[]> {
		return this.citysRepository.find();
	}

	async findM(research: string) : Promise<CityDto[]> {
		const cities = await this.citysRepository.find({
			take: 100,
			where: { nomCommune: ILike(`%${research}%`),
			codePostal: LessThan('96000'),
		 },
		});
		return cities;
	}

	async findOM(research: string) : Promise<CityDto[]> {
		const cities = await this.citysRepository.find({
			take: 100,
			where: { nomCommune: ILike(`%${research}%`),
			codePostal: MoreThan('96000'),
		 },
		});
		return cities;
	}
}
