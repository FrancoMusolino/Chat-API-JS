//@ts-check
import { appendAMessage } from "./appendAMessage.js";

const broadcastChannel = new BroadcastChannel("chat");

/**
 * @param {string} message
 */

export const postMessageOnChannel = (message) =>
  broadcastChannel.postMessage(message);

broadcastChannel.addEventListener("message", (e) =>
  appendAMessage(e.data, true)
);
