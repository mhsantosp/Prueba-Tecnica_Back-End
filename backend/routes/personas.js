const { Router } = require("express");
const { ObjectId } = require("mongodb");
const router = Router();
const connection = require("../config/db.config");

const mongodb = require('mongodb');
// const {ObjectId} = require('mongodb');

router.get("/personas", async (req, res) => {
  const db = await connection();
  await db
    .collection("personas")
    .find()
    .toArray(function (err, personas) {
      res.json(personas);
      alert(personas)
    });
});

router.post("/personas", async (req, res) => {
  const db = await connection();
  const { nombres, apellidos, email, usuario, pasword } = req.body;

  db.collection("personas").insertOne(
    {
      nombres,
      apellidos,
      email,
      usuario,
      pasword,
    },
    function (err, info) {
      res.json(info.ops[0]);
    }
  );
});

router.put("/personas/:id", async (req, res) => {
  const db = await connection();
  const { nombres, apellidos, email, usuario, pasword } = req.body;
  const id = req.params.id;

  db.collection("personas").findOneAndUpdate(
    { "_id": ObjectId(id) },
    { $set: { nombres: nombres, apellidos: apellidos, email: email, usuario: usuario, pasword:pasword }},
    // { returnNewDocument: true },
    function () {
      res.json("Persona actualizada");
    }
  );
});

router.delete("/personas/:id", async (req, res) => {
  const db = await connection();
  const id = req.params.id;

  db.collection("personas").deleteOne(
    { "_id": ObjectId(id) },
    function () {
      res.json("Persona eliminada");
    }
  );
});

module.exports = router;