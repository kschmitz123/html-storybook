import "./track.css";
import billieJean from "../../assets/billie-jean.png";
import playBtnActive from "../../assets/playbutton-active.svg";

export function createTrackElement() {
  const title = "Billie Jean";
  const artist = "Michael Jackson";

  const divElement = document.createElement("div"); // <div></div>

  const h3Element = document.createElement("h3"); // <h3></h3>
  h3Element.innerText = title; // <h3>Billie Jean</h3>

  const pElement = document.createElement("p"); // create <p>
  pElement.innerText = artist; // create <p>Michael Jackson<p>

  const btnElement = document.createElement("button"); // <button>
  const playActionElement = document.createElement("img");
  playActionElement.src = playBtnActive;

  const imgElement = document.createElement("img"); // <img>
  imgElement.src = billieJean;
  imgElement.alt = "Image of " + artist;

  divElement.append(imgElement, h3Element, pElement, btnElement);
  btnElement.append(playActionElement);

  return divElement;
}
