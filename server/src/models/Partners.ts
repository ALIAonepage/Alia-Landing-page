import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Partners {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    imagePartner1: string

    @Column()
    imagePartner2: string

}
