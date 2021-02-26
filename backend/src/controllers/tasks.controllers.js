import Task from '../models/Tasks';

// Nueva Tarea
export const createTask = async (req, res) => {
  //datos que se extraen del body
  const { imgTarea, nameTarea, prioridadTarea, fechaVencimiento } = req.body
  const newTask = new Task({imgTarea, nameTarea, prioridadTarea, fechaVencimiento});
  const taskSaved = await newTask.save();
  res.status(201).json(taskSaved);
}

// Busquedas
export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
}

//optener tarea por id
export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.taskId);
  res.status(200).json(task);
}

// Actualización
export const updateTaskById = async (req, res) => {
  const upTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
  res.status(200).json(upTask);
}

// Eliminar
export const deleteTaskById = async (req, res) => {
  const {taskId} = req.params;
  await Task.findByIdAndDelete(taskId);
  res.json('Tarea eliminada!!');
}