/* Example gadget model
 * Data manipulation of all gadget requests
 */

import { H3Event } from "h3";
import { JSONResponse } from "~~/appopse/misc/types";

/**
 * @desc Shows all gadgets
 * @param event H3 Event passed from api
 * @returns {Promise<JSONResponse>} Returns gadgets or error
 */
export async function index(event: H3Event): Promise<JSONResponse> {
  const response = {} as JSONResponse;

  const info = "get all gadgets";
  response.status = "success";
  response.data = {
    info,
  };

  return response;
}

/**
 * @desc Creates a new gadget in database
 * @param event H3 Event passed from api
 * @returns {Promise<JSONResponse>}
 */
export async function create(event: H3Event): Promise<JSONResponse> {
  const response = {} as JSONResponse;

  const info = "create a gadgets";
  response.status = "success";
  response.data = {
    info,
  };

  return response;
}

/**
 * @desc Show a particular gadget
 * @param event H3 Event passed from api
 * @returns {Promise<JSONResponse>} gadget object or error
 */
export async function show(event: H3Event): Promise<JSONResponse> {
  const response = {} as JSONResponse;

  const info = "show a gadget";
  response.status = "success";
  response.data = {
    info,
  };

  return response;
}

/**
 * @desc Update particular gadget
 * @param event H3 Event passed from api
 * @returns {Promise<JSONResponse | H3Error>} Object mentioning success or failure of editing gadget or error
 */
export async function update(event: H3Event): Promise<JSONResponse> {
  const response = {} as JSONResponse;

  const info = "update a gadget";
  response.status = "success";
  response.data = {
    info,
  };

  return response;
}

/**
 * @desc Delete a particular gadget
 * @param event H3 Event passed from api
 * @returns {Promise<JSONResponse | H3Error>} Object mentioning success or failure of deleting gadget or error
 */
export async function destroy(event: H3Event): Promise<JSONResponse> {
  const response = {} as JSONResponse;

  const info = "delete a gadget";
  response.status = "success";
  response.data = {
    info,
  };

  return response;
}
