//@ts-check

const messageTemplate = /**
 * @type {HTMLTemplateElement}
 */ (document.getElementById("message-template"));

const messageFragment = messageTemplate.content;

const main = /**
 * @type {HTMLElement}
 */ (document.getElementById("main-content"));

/**
 * @param {string} value
 * @param {boolean} [isExternal=false] Default false
 */

export const appendAMessage = (value, isExternal = false) => {
  const messageContent = /**
    @type {HTMLButtonElement}
    */ (messageFragment.getElementById("message-body"));

  messageContent.textContent = value;

  if (isExternal) {
    messageContent.style.background = "#c5c5c5";
  } else {
    messageContent.style.background = "#f5f5f5";
  }

  const messageClone = messageFragment.cloneNode(true);

  main.appendChild(messageClone);
};
