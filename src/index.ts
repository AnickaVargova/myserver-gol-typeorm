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

    app.post("/:setting", async function (req: Request, res: Response) {
      const patternName = req.params.setting;
      const pattern = new Pattern();
      pattern.name = patternName;
      pattern.patternJSON = JSON.stringify(req.body);

      const results = await connection.manager.save(pattern);

      return res.send(results);
    });

    app.put("/:setting", async function (req: Request, res: Response) {
      const patternName = req.params.setting;
      const results = await connection.manager.update(
        Pattern,
        { name: patternName },
        { patternJSON: JSON.stringify(req.body) }
      );
      return res.send(results);
    });

    app.delete("/:setting", async function (req: Request, res: Response) {
      const patternName = req.params.setting;
      const results = await connection.manager.delete(Pattern, {
        name: patternName,
      });
      return res.send(results);
    });
    app.listen(8080);
  })
  .catch((error) => console.log(error));
