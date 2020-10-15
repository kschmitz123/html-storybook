import { createElement } from "../../utils/elements";
import forwardBtn from "../../assets/forward.svg";
import rewindBtn from "../../assets/rewind.svg";
import playBtn from "../../assets/playbutton-inactive.svg";

export const createPlayerElement = () => {
  const PlayerElement = createElement("div", {
    className: "Player",
    children: [
      createElement("img", {
        src: rewindBtn,
      }),
      createElement("img", {
        src: playBtn,
      }),
      createElement("img", {
        src: forwardBtn,
      }),
    ],
  });

  return PlayerElement;
};
