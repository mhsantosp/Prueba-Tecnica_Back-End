const { Router } = require("express");
const { ObjectId } = require("mongodb");
const router = Router();
const connection = require("../config/db.config");

const mongodb = require('mongodb');
// const {ObjectId} = require('mongodb');

router.get("/tareas/idusuario", async (req, res) => {
  const db = await connection();
  const id = req.params.id;
  await db
    .collection("tareas")
    .find({"idusuario": id})
    .toArray(function (err, tareas) {
      res.json(tareas);
    });
});

router.post("/tareas", async (req, res) => {
  const db = await connection();
  const { imgtarea, nametarea, prioridadtarea, fechavencimiento, idusuario } = req.body;

  db.collection("tareas").insertOne(
    {
      imgtarea,
      nametarea,
      prioridadtarea,
      fechavencimiento,
      idusuario,
    },
    function (err, info) {
      res.json(info.ops[0]);
    }
  );
});

router.put("/tareas/:id", async (req, res) => {
  const db = await connection();
  const { imgtarea, nametarea, prioridadtarea, fechavencimiento } = req.body;
  const id = req.params.id;

  db.collection("tareas").findOneAndUpdate(
    { "_id": ObjectId(id) },
    { $set: { imgtarea: imgtarea, nametarea: nametarea, prioridadtarea: prioridadtarea, fechavencimiento: fechavencimiento}},
    // { returnNewDocument: true },
    function () {
      res.json("Tarea actualizada");
    }
  );
});

router.delete("/tareas/:id", async (req, res) => {
  const db = await connection();
  const id = req.params.id;

  db.collection("tareas").deleteOne(
    { "_id": ObjectId(id) },
    function () {
      res.json("Tarea eliminada");
    }
  );
});

module.exports = router;