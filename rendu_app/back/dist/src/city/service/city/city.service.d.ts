import { CityDto } from 'src/city/dto/city.dto';
import { CityEntity } from 'src/city/entity/city.entity';
import { DataSource, Repository } from 'typeorm';
export declare class CityService {
    private dataSource;
    private citysRepository;
    constructor(dataSource: DataSource, citysRepository: Repository<CityEntity>);
    createMany(cities: CityDto[]): Promise<void>;
    create(city: CityDto): Promise<CityDto>;
    findAll(): Promise<CityDto[]>;
    findM(research: string): Promise<CityDto[]>;
    findOM(research: string): Promise<CityDto[]>;
}
