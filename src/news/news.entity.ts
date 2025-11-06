import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'news' })
export class News {
  @PrimaryGeneratedColumn({ name: 'num' })
  num!: number;

  @Column({ name: 'crimetype', type: 'varchar', length: 100 })
  crimeType!: string;

  @Column({ name: 'location', type: 'text', nullable: true })
  location?: string;

  @Column({ name: 'crimeday', type: 'date', nullable: true })
  crimeDay?: Date;

  @Column({ name: 'newslink', type: 'text', nullable: true })
  newsLink?: string;

  @Column({ name: 'title', type: 'text', nullable: true })
  title?: string;

  @Column({ name: 'trust', type: 'float', nullable: true })
  trust?: number;
}
