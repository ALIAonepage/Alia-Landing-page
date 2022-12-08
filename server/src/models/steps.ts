import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Steps {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    stepImage1: string

    @Column()
    stepDescription1: string

    @Column()
    stepImage2: string

    @Column()
    stepDescription2: string

    @Column()
    stepImage3: string

    @Column()
    stepDescription3: string

    @Column()
    stepImage4: string

    @Column()
    stepDescription4: string

}