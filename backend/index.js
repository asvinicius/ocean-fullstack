const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://admin:5V16f5SFi74SeaI3@cluster0.vclo8jb.mongodb.net/";
const dbName = "asvoceanfullstack";

async function main() {

  console.log("Conectando com o banco de dados...");

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection("pontuacoes");

  console.log("Banco de dados conectado com sucesso!");

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", function (req, res) {
    res.send("Hello, World!");
  });

  app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
  });

  app.get("/pontuacoes", async function (req, res) {
    const itens = await collection
      .find()
      .sort({ pontos: -1 })
      .limit(10)
      .toArray();

    res.send(itens);
  });

  app.post("/pontuacoes", async function (req, res) {
    
    const item = req.body;

    await collection.insertOne(item);

    res.send(item);
  });

  app.listen(process.env.PORT || 3333);
}

main();