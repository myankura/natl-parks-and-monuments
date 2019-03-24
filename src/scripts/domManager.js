//factory function for building an element that takes three parameters
const buildElement = (elementType, elementId, elementTextContent) => {
  let htmlElement = document.createElement(elementType);
  //checks to see if elementId has been passed through
  if (elementId) {
    //if true than assign the element an id
    htmlElement.setAttribute("id", elementId);
  } //else create an element without an id and just fill text content
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

//clear the element from the dom
clearElement = domElement => {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
  }
};

//targets the div container in index with the id of display-container
const displayContainer = document.querySelector("#display-container");
//appends national parks data to the dom
displayContainer.appendChild(buildElement("section", "national--parks"));
//appends monuments data to the dom
displayContainer.appendChild(buildElement("section", "national--monuments"))