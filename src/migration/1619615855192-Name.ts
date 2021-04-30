import {MigrationInterface, QueryRunner} from "typeorm";

export class Name1619615855192 implements MigrationInterface {
    name = 'Name1619615855192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pattern" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "pattern_json" jsonb NOT NULL, CONSTRAINT "PK_50f41f421043f2637873957f277" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pattern"`);
    }

}
