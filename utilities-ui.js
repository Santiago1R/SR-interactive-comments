import { incrementVotes } from "./functionalities.js";
export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
};

export const createUserAvatar = (user) => {
  const contentUser = createElement("div", "content-user");

  const photoUser = createElement("img");
  photoUser.src = user.image.png;
  contentUser.append(photoUser);

  const nameUser = createElement("h2");
  nameUser.textContent = user.username;
  contentUser.append(nameUser);

  return contentUser;
};
export const createButtonIcon = (svg, text) => {
  const contentReply = createElement("div", "content-button-icon");

  const iconReply = createElement("div", "icon-button");
  iconReply.innerHTML = svg;
  contentReply.append(iconReply);

  const textReply = createElement("p", "text-icon-button");
  textReply.textContent = text;
  contentReply.append(textReply);

  return contentReply;
};

export const createText = (content) => {
  const text = createElement("p", "text-comment");
  text.textContent = content;
  return text;
};

export const createCommentHeader = () => {
  const header = createElement("article", "content-title-card");
  return header;
};
const prueba = () => {
  console.log("prueba");
};

export const createButtonVotes = (svgIconOne, svgIconTwo, id) => {
  const button = createElement("div", "button-likes");

  const iconPlus = createElement("div", "icon-plus");
  iconPlus.innerHTML = svgIconOne;
  iconPlus.onclick = () => {
    incrementVotes(true, id);
  };
  button.append(iconPlus);

  const totalVotes = createElement("h2", "score-likes");
  totalVotes.setAttribute("id", "button-" + id);
  totalVotes.textContent = "0";
  button.append(totalVotes);

  const iconMinus = createElement("div", "icon-minus");
  iconMinus.innerHTML = svgIconTwo;
  iconMinus.onclick = () => {
    incrementVotes(false, id);
  };
  button.append(iconMinus);

  return button;
};
