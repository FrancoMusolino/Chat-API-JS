//@ts-check
import { appendAMessage } from "./appendAMessage.js";
import { postMessageOnChannel } from "./broadcastChannel.js";

const form = /**
 @type {HTMLFormElement}
 */ (document.getElementById("form"));

const input = /**
 @type {HTMLInputElement}
 */ (document.getElementById("message-input"));

const button = /**
 @type {HTMLButtonElement}
 */ (document.getElementById("submit-form"));

/**
 * @param {HTMLElement} element
 */

const addDisabledAttribute = (element) => element.setAttribute("disabled", "");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = input;

  appendAMessage(value);
  postMessageOnChannel(value);

  addDisabledAttribute(button);
  input.value = "";
});

input.addEventListener("input", (e) => {
  input.value
    ? button.removeAttribute("disabled")
    : addDisabledAttribute(button);
});
