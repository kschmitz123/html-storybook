export function createTrackElement() {
  const divElement = document.createElement("div"); // <div></div>

  const h3Element = document.createElement("h3"); // <h3></h3>
  h3Element.innerText = "Billie Jean"; // <h3>Billie Jean</h3>

  const pElement = document.createElement("p"); // create <p>
  pElement.innerText = "Michael Jackson"; // create <p>Michael Jackson<p>

  const button = document.createElement("button");

  const img = document.createElement("img");

  divElement.append(img, h3Element, pElement, button);

  return divElement;
}
