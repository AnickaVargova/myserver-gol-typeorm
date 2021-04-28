import { MigrationInterface, QueryRunner } from "typeorm";

export class mySecondMigration1619596978807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE pattern ALTER COLUMN name TYPE VARCHAR`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
