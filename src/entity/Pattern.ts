import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pattern {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  patternJSON: string;
}
