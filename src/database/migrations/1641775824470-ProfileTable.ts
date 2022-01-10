import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProfileTable1641775824470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "profile",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          { name: "type", type: "integer", isNullable: false },
          {
            name: "idUser",
            type: "integer",
            unsigned: true,
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["idUser"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            name: "userProfile",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profile");
  }
}
