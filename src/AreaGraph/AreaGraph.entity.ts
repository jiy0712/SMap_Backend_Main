import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('AreaGraph')
export class AreaGraph {
  @PrimaryGeneratedColumn()
  num!: number;

  @Column({ type: 'varchar', length: 50 })
  region!: string;

  @Column({ type: 'varchar', length: 50 })
  crimetype!: string;

  @Column({ type: 'int' })
  count!: number;
}
