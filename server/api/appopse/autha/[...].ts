import authaController from "~~/appopse/mvc/autha/controller";

export default defineEventHandler(async (event) => {
  return authaController(event);
});
