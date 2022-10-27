import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CityService } from '../service/city/city.service';
import { CityDto } from '../dto/city.dto';

@Controller('cities')
export class CityController {
	constructor(private cityService: CityService){}

	//create database for multiple cities at once
	@Post()
	createMany(@Body() city: CityDto[]) {
		this.cityService.createMany(city);
	}

	@Get('/')
	findAll(): Promise<CityDto[]> {
		return this.cityService.findAll();
	}

	//métropole
	@Get('/metropole:RESEARCH')
	findM(@Param('RESEARCH') research): Promise<CityDto[]> {
		return this.cityService.findM(research);
	}

	//outre-mer
	@Get('/outre-mer:RESEARCH')
	findOM(@Param('RESEARCH') research): Promise<CityDto[]> {
		return this.cityService.findOM(research);
	}
}
