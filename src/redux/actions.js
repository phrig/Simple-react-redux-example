/* actions.js */
/*jshint esversion: 6 */

export const SEND_DATA_TO_PARENT = "SEND_DATA_TO_PARENT";

export function sendDataToParent(data) {
  console.log("SEND_DATA_TO_PARENT:", data);
  return { type: SEND_DATA_TO_PARENT, data: data };
}
