/** Middleware for all autha routes
 * Middleware should only return error or void
 */
import { H3Event, H3Error } from "h3";
import { getClientPlatform } from "~~/appopse/middleware/";

export function authaMiddleware(event: H3Event): H3Error | string {
  return getClientPlatform(event);
}
