import Role from '../models/Role';

export const createRoles = async () => {

  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;
    const values = await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "moderador" }).save(),
      new Role({ name: "user" }).save(),
    ]);
    console.log('Values', values);
  } catch (err) {
    console.err('Error', err);
  }
};