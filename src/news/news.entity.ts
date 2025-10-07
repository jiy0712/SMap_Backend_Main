import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'news' })
export class News {
  @PrimaryGeneratedColumn({ name: 'num' })
  num!: number;

  @Column({ name: 'crimeType', type: 'varchar', length: 100 })
  crimeType!: string;

  @Column({ name: 'location', type: 'text', nullable: true })
  location?: string;

  @Column({ name: 'crimeDay', type: 'date', nullable: true })
  crimeDay?: Date;

  @Column({ name: 'newsLink', type: 'text', nullable: true })
  newsLink?: string;

  @Column({ name: 'title', type: 'text', nullable: true })
  title?: string;

  @Column({ name: 'trust', type: 'float', nullable: true })
  trust?: number;
}
