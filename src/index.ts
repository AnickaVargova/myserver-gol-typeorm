import "reflect-metadata";
import { createConnection } from "typeorm";
import { Pattern } from "./entity/Pattern";
import express from "express";
import cors from "cors";
import { Request, Response } from "express";

createConnection()
  .then(async (connection) => {
    const patternRepository = connection.getRepository(Pattern);

    const app = express();
    app.use(express.json());
    app.use(cors());

    // console.log("Inserting a new pattern into the database...");
    // const pattern = new Pattern();
    // pattern.name = "beacon";
    // pattern.patternJSON = JSON.stringify([
    //   [false, false, false, false, false, false],
    //   [false, true, true, false, false, false],
    //   [false, true, false, false, false, false],
    //   [false, false, false, false, true, false],
    //   [false, false, false, true, true, false],
    //   [false, false, false, false, false, false],
    // ]);

    // await connection.manager.save(pattern);
    // console.log("Saved a new user with id: " + pattern.id);

    // console.log("Loading patterns from the database...");

    app.get("/:setting", async function (req: Request, res: Response) {
      const patternName = req.params.setting;
      const results = await patternRepository.find();
      return res.send(
        results.find((item) => item.name === patternName).patternJSON
      );
    });

    const patterns = await connection.manager.find(Pattern);
    console.log("Loaded patterns: ", patterns);

    app.listen(8080);
  })
  .catch((error) => console.log(error));
