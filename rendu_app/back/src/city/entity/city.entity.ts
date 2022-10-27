import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CityEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column( {nullable: false} )
	nomCommune: string;

	@Column( {name: 'code_postal', nullable: false} )
	codePostal: string;
}
