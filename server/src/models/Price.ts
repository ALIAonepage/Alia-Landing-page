import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Price{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstPrice: number

    @Column()
    modifiedPrice: number

}