import usersController from "~~/appopse/mvc/users/controller";

export default defineEventHandler(async (event) => {
  return await usersController(event);
});
