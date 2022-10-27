import { CityService } from '../service/city/city.service';
import { CityDto } from '../dto/city.dto';
export declare class CityController {
    private cityService;
    constructor(cityService: CityService);
    createMany(city: CityDto[]): void;
    findAll(): Promise<CityDto[]>;
    findM(research: any): Promise<CityDto[]>;
    findOM(research: any): Promise<CityDto[]>;
}
