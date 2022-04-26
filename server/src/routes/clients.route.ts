import { Client, IClient } from "@/models/client.model";
import HttpError from "@/utils/HttpError";
import express from "express";
import "express-async-errors";
import { FilterQuery } from "mongoose";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const {
    pageSize = 10,
    page = 1,
    name,
    order = "name",
    sort = "desc",
  } = req.query;

  const query: FilterQuery<IClient> = {};
  //throw new HttpError(400, "Parametros insuficientes.");

  if (name) {
    query.name = { $regex: new RegExp(name as string), $options: "i" };
  }

  var options = {
    sort: { [sort as string]: order === "desc" ? -1 : 1 },
  };

  Client.paginate(query, {
    offset: (Number(page) - 1) * Number(pageSize),
    limit: Number(pageSize),
    options,
  }).then((data) => {
    res.send({
      total: data.totalDocs,
      data: data.docs,
    });
  });
});

router.post("/", async (req, res, next) => {
  try {
    const { name, debt, debtDate } = req.body;
    if (!name || !debt || !debtDate) {
      throw new HttpError(400, "Parametros insuficientes.");
    }
    if (name.length < 6) {
      throw new HttpError(400, "Nome muito pequeno.");
    }
    if (await Client.findOne({ name })) {
      throw new HttpError(409, "Cliente já cadastrado.");
    }

    const client = new Client({
      name,
      debt,
      debtDate: new Date(debtDate),
    });

    await client.save();
    res.json({ ...client, message: "Cliente criado com sucesso." });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const client = await Client.findOne({ _id: req.params.id });
    if (!client) throw new HttpError(404, "Cliente não encontrado");
    await client.delete();
    res.status(200).send({ message: "Cliente deletado com sucesso." });
  } catch (e) {
    next(e);
  }
});

export default router;
