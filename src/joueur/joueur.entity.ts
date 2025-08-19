import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('joueurs')
export class Joueur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  position: string;

  @Column()
  number: number;

  @Column('decimal', { precision: 5, scale: 2 })
  height: number;

  @Column('decimal', { precision: 5, scale: 2 })
  weight: number;

  @CreateDateColumn()
  created_at: Date;
}
