import { MigrationInterface, QueryRunner } from "typeorm";

export class myThirdMigration1619600993553 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE pattern ALTER COLUMN "patternJSON" TYPE JSONB USING "patternJSON"::jsonb`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
