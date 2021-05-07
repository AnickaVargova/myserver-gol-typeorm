import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pattern {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
  })
  name: string;

  @Column({
    type: "jsonb",
    
  })
  pattern_json: string;
}
