import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class createTableUser1615398153668 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()' // funcao que cria uuid no pg

          },
          {
            name: 'name',
            isNullable: false,
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'is_valid',
            type: 'boolean',
            default: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user')
  }
}
