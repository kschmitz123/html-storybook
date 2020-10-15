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

export const createTrackElement = (track) => {
  const audioElement = new Audio(track.audioSrc);
  const playActionElement = createElement("img", {
    src: playBtnActive,
  });
  const trackElement = createElement("div", {
    className: "track",
    children: [
      createElement("img", {
        className: "track__img",
        src: track.imgSrc,
        alt: "Image of " + track.artist,
      }),
      createElement("div", {
        className: "track__info",
        children: [
          createElement("h3", {
            className: "track__title",
            innerText: track.title,
          }),
          createElement("p", {
            className: "track__artist",
            innerText: track.artist,
          }),
        ],
      }),
      createElement("button", {
        className: "playButton",
        children: [playActionElement],
        onclick: () => {
          if (!audioElement.paused) {
            audioElement.pause();
            setPlayIcon(playActionElement);
          } else {
            audioElement.play();
            setPauseIcon(playActionElement);
          }
        },
      }),
    ],
  });
  return trackElement;
};

// const underline = document.createElement("div"); // <div></div>
// underline.className = "underline";

export const setPlayIcon = (element) => {
  element.src = playBtnActive;
  element.alt = "Play";
};
export const setPauseIcon = (playActionElement) => {
  playActionElement.src = pauseBtnActive;
  playActionElement.alt = "Pause";
};
