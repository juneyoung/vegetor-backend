import { Model, Column, Table, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table
export default class Board extends Model<Board> {

  @PrimaryKey
  @Column
  id!: number

  @Column
  type?: string

  @Column
  title?: string

  @Column
  contents?: string

  @Column
  display?: string

  @Column
  hit?: string

  @Column
  priority?: string

  @CreatedAt
  @Column
  created_at?: Date

  @UpdatedAt
  @Column
  updated_at?: Date
}
