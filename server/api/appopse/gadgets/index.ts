/** This is an example endpoint and can be deleted.
 * If you delete it, also delete ~~appopse/mvc/gadgets directory
 */

import gadgetsController from "~~/appopse/mvc/gadgets/controller";

export default defineEventHandler(async (event) => {
  return gadgetsController(event);
});
