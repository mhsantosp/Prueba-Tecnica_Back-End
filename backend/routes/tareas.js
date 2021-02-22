const { Router } = require("express");
const { ObjectId } = require("mongodb");
const router = Router();
const connection = require("../config/db.config");

//consultas
router.get("/tareas", async (req, res) => {
  const db = await connection();
  await db
    .collection("tareas")
    .find()
    .toArray(function (err, tareas) {
      res.json(tareas);
    });
});
router.get("/tareas/:id", async (req, res) => {
  const db = await connection();
  const id = req.params.id;
  await db.collection("tareas")
    .find({ "_id": ObjectId(id) })
    .toArray(function (err, tareas) {
      res.json(tareas);
    });
});

//insertar
router.post("/tareas", async (req, res) => {
  const db = await connection();
  const { imgtarea, nametarea, prioridadtarea, fechavencimiento, idusuario } = req.body;
  // const idusuario = ;

  db.collection("tareas").insertOne(
    { imgtarea, nametarea, prioridadtarea, fechavencimiento, idusuario },
    function (err, info) {
      res.json(info.ops[0]);
    }
  );
});

//update
router.put("/tareas/:id", async (req, res) => {
  const db = await connection();
  const { imgtarea, nametarea, prioridadtarea, fechavencimiento } = req.body;
  const id = req.params.id;

  db.collection("tareas").findOneAndUpdate(
    { "_id": ObjectId(id) },
    { $set: { imgtarea: imgtarea, nametarea: nametarea, prioridadtarea: prioridadtarea, fechavencimiento: fechavencimiento}},
    function () {
      res.json("Tarea actualizada");
    }
  );
});

//eliminar
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