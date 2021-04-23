import "reflect-metadata";
import { createConnection } from "typeorm";
import { Pattern } from "./entity/Pattern";
import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import random from "./random";

createConnection()
  .then(async (connection) => {
    const patternRepository = connection.getRepository(Pattern);

    const app = express();
    app.use(express.json());
    app.use(cors());

    // console.log("Inserting a new pattern into the database...");
    // const pattern = new Pattern();
    // pattern.name = "pulsar";
    // pattern.patternJSON = JSON.stringify([
    //...
    // ]);

    // await connection.manager.save(pattern);
    // console.log("Saved a new user with id: " + pattern.id);

    // console.log("Loading patterns from the database...");

    app.get("/", async function (req: Request, res: Response) {
      const results = await patternRepository.find();
      return res.send(results.map((item) => item.name).concat("random"));
    });

    app.get("/random", (req, res) => res.send(random()));

    app.get("/:setting", async function (req: Request, res: Response) {
      const patternName = req.params.setting;
      const results = await patternRepository.find();
      return res.send(
        results.find((item) => item.name === patternName).patternJSON
      );
    });

    // const patterns = await connection.manager.find(Pattern);
    // console.log("Loaded patterns: ", patterns);

    app.listen(8080);
  })
  .catch((error) => console.log(error));
