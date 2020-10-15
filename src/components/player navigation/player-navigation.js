import "./player-navigation.css";
import { createElement } from "../../utils/elements";
import forwardBtn from "../../assets/forward.svg";
import rewindBtn from "../../assets/rewind.svg";
import playBtn from "../../assets/playbutton-inactive.svg";
import pauseBtn from "../../assets/icon-pause-gradient.svg";
// import pauseBtn from "../../assets/icon-pause-gradient.svg";

export const createPlayerElement = () => {
  const rewindAction = createElement("img", {
    src: rewindBtn,
  });
  const playAction = createElement("img", {
    src: playBtn,
  });
  const forwardAction = createElement("img", {
    src: forwardBtn,
  });
  const audioElement = new Audio(
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/The_Rainbows_End/TRG_Banks_-_02_-_Evening_journey.mp3"
  );

  const PlayerElement = createElement("div", {
    className: "player",
    children: [
      createElement("button", {
        className: "rewindBtn",
        children: [rewindAction],
        onclick: () => {
          alert("Rewind");
        },
      }),
      createElement("button", {
        className: "playBtn",
        children: [playAction],
        onclick: () => {
          if (!audioElement.paused) {
            audioElement.pause();
            setPlayIcon(playAction);
          } else {
            audioElement.play();
            setPauseIcon(playAction);
          }
        },
      }),
      createElement("button", {
        className: "forwardBtn",
        children: [forwardAction],
        onclick: () => {
          alert("Forward");
        },
      }),
    ],
  });

  return PlayerElement;
};

const setPlayIcon = (element) => {
  element.src = playBtn;
  element.alt = "Play";
};
const setPauseIcon = (playActionElement) => {
  playActionElement.src = pauseBtn;
  playActionElement.alt = "Pause";
};
