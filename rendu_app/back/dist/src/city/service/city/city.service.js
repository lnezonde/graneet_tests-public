"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const city_entity_1 = require("../../entity/city.entity");
const typeorm_2 = require("typeorm");
const fs = require('fs');
const path = 'database_is_created';
let CityService = class CityService {
    constructor(dataSource, citysRepository) {
        this.dataSource = dataSource;
        this.citysRepository = citysRepository;
    }
    async createMany(cities) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            for (const city of cities) {
                await queryRunner.manager.save(this.citysRepository.create(city));
            }
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
            console.log("Cities database is created!");
        }
    }
    create(city) {
        return this.citysRepository.save(city);
    }
    findAll() {
        return this.citysRepository.find();
    }
    async findM(research) {
        const cities = await this.citysRepository.find({
            take: 100,
            where: { nomCommune: (0, typeorm_2.ILike)(`%${research}%`),
                codePostal: (0, typeorm_2.LessThan)('96000'),
            },
        });
        return cities;
    }
    async findOM(research) {
        const cities = await this.citysRepository.find({
            take: 100,
            where: { nomCommune: (0, typeorm_2.ILike)(`%${research}%`),
                codePostal: (0, typeorm_2.MoreThan)('96000'),
            },
        });
        return cities;
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(city_entity_1.CityEntity)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map