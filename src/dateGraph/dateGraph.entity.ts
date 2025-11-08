import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('DateGraph')
export class DateGraph {
  @PrimaryGeneratedColumn()
  num!: number;

  @Column({ type: 'text' })
  crimetype!: string; 

  @Column({ type: 'text' })
  date!: string; 

  @Column({ type: 'int' })
  count!: number; 
}
