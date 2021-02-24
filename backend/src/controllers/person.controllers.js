import Person from '../models/Persons';

export const createPerson = async (req, res) => {
  //datos que se extraen del body
  const { imgPerfil, names, lastNames, email, nameUser, password } = req.body
  const newPerson = new Person({imgPerfil, names, lastNames, email, nameUser, password});
  const personSaved = await newPerson.save();
  res.status(201).json(personSaved);
}

export const getPersons = async (req, res) => {
  const persons = await Person.find();
  res.json(persons);
}

export const getPersonById = async (req, res) => {
  const person = await Person.findById(req.params.personId);
  res.status(200).json(person);
}

export const updatePersonById = async (req, res) => {
  const upPerson = await Person.findByIdAndUpdate(req.params.personId, req.body, { new: true });
  res.status(200).json(upPerson);
}

export const deletePersonById = async (req, res) => {
  const {personId} = req.params;
  await Person.findByIdAndDelete(personId);
  res.json('Usuario eliminado correctamente!!');
}