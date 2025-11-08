import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TimeGraph')
export class TimeGraph {
  @PrimaryGeneratedColumn()
  num!: number;

  @Column({ type: 'text' })
  crimetype!: string;

  @Column({ type: 'text' })
  time!: string;

  @Column({ type: 'int' })
  count!: number;
}
