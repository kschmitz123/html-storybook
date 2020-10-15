import "./track.css";
import playBtnActive from "../../assets/playbutton-active.svg";
import pauseBtnActive from "../../assets/icon-pause-gradient.svg";
import { createElement } from "../../utils/elements";
/*
<div class="track">
    <img class="track__image"/>
    <div class="track__info">
    <h3 class="track__title">
    <p class="track__artist">
    </div>
    <button class="playbutton">
    <img>
    </button>
    </div>
    */

export function createTrackElement(track) {
  const trackElement = createElement("span", {
    className: "track",
    innerText: "Hello Me",
  });
  return trackElement;

  // const trackElement = document.createElement("div"); // <div></div>
  // trackElement.className = "track";

  // const underline = document.createElement("div"); // <div></div>
  // underline.className = "underline";

  // const trackImage = document.createElement("img"); // <img>
  // trackImage.className = "track__img";
  // trackImage.src = track.imgSrc;
  // trackImage.alt = "Image of " + track.artist;

  // const trackInfo = document.createElement("div");
  // trackInfo.className = "track__info";

  // const trackTitle = document.createElement("h3"); // <h3></h3>
  // trackTitle.innerText = track.title; // <h3>Billie Jean</h3>
  // trackTitle.className = "track__title";

  // const trackArtist = document.createElement("p"); // create <p>
  // trackArtist.innerText = track.artist; // create <p>Michael Jackson<p>
  // trackArtist.className = "track__artist";

  // const btnElement = document.createElement("button"); // <button>
  // btnElement.className = "playButton";

  // const playActionElement = document.createElement("img"); // <img>
  // playActionElement.src = playBtnActive;

  // trackElement.append(trackImage, trackInfo, btnElement, underline);
  // btnElement.append(playActionElement);
  // trackInfo.append(trackTitle, trackArtist);

  // const audioElement = new Audio(track.audioSrc);

  // btnElement.onclick = () => {
  //   if (!audioElement.paused) {
  //     audioElement.pause(); // wenn true bewirkt ein click Pause
  //     setPlayIcon(playActionElement);
  //   } else {
  //     audioElement.play(); //wenn false bewirkt ein click Play
  //     setPauseIcon(playActionElement);
  //   }
  // };
}

const setPlayIcon = (element) => {
  element.src = playBtnActive;
  element.alt = "Play";
};
const setPauseIcon = (playActionElement) => {
  playActionElement.src = pauseBtnActive;
  playActionElement.alt = "Pause";
};
