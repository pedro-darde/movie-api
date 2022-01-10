import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserTable1641772473300 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            isPrimary: true,
            unsigned: true,
            type: "integer",
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar", isNullable: false },
          { name: "cellPhone", type: "varchar", isNullable: false },
          { name: "email", type: "varchar", isNullable: false },
          { name: "active", type: "boolean", default: true },
          { name: "birthDate", type: "date", isNullable: false },
          { name: "address", type: "varchar", isNullable: false },
          { name: "state", type: "integer", isNullable: false },
          { name: "country", type: "integer", isNullable: false },
          { name: "city", type: "integer", isNullable: false },
          { name: "cityName", type: "varchar", isNullable: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
