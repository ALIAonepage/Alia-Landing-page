import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Subscription {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    phoneNumber: string

    @Column()
    email: string

    @Column()
    company: string

    @Column()
    partnersNumber: number

    @Column()
    segment: string

    @Column()
    solutionDescribe: string

    @Column()
    site: string


}