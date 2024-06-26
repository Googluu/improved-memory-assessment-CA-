import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  nickName: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;
}
