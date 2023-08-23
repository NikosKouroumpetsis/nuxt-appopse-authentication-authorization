import refreshTokensController from "~~/appopse/mvc/refresh-tokens/controller";

export default defineEventHandler(async (event) => {
  return refreshTokensController(event);
});
