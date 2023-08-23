/* Example gadget controller
 * Routes all gadget requests
 */

// Definitely much cleaner and neater

import { index, create, show, update, destroy } from "./model";
import { createRouter, defineEventHandler, useBase } from "h3";

const router = createRouter();

// Routes /api/appopse/gadget

// Get all gadgets
router.get(
  "/",
  defineEventHandler(async (event) => {
    return await index(event);
  })
);

// Create a gadget
router.post(
  "/",
  defineEventHandler(async (event) => {
    return await create(event);
  })
);

// Get a single gadget
router.get(
  "/:id",
  defineEventHandler(async (event) => {
    return await show(event);
  })
);

// Edit a gadget
router.put(
  "/:id",
  defineEventHandler(async (event) => {
    return await update(event);
  })
);

// Delete a gadget
router.delete(
  "/:id",
  defineEventHandler(async (event) => {
    return await destroy(event);
  })
);

// Example complex route
router.get(
  "/:id/abc/:author-id",
  defineEventHandler((event) => {
    const headers = getHeaders(event);
    return {
      params: event.context.params,
      headers: headers,
    };
  })
);

export default useBase("/api/apoppse/gadgets", router.handler);
