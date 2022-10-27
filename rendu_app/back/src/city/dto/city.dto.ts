import { IsNumber, IsString } from "class-validator";

export class CityDto {
	@IsString()
	nomCommune : string;

	@IsString()
	codePostal: string;
}
