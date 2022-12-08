import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Steps {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    stepsImage: string

    @Column()
    stepsDescription: string

} // two Columns