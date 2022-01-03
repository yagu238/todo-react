import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('todos')
export class TodoEntiry {
  @PrimaryGeneratedColumn({ comment: 'ID' })
  readonly id: number;

  @Column({ name: 'title', length: 64, comment: 'タイトル' })
  readonly title: string;

  @Column({ name: 'completed', comment: '完了フラグ', default: false })
  readonly completed: boolean;

  @CreateDateColumn({ name: 'created_at', comment: '作成日時' })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', comment: '更新日時' })
  readonly updatedAt: Date;
}
