import "./track.css";
import playBtnActive from "../../assets/playbutton-active.svg";
import pauseBtnActive from "../../assets/icon-pause-gradient.svg";

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
  //   const title = "Billie Jean";
  //   const artist = "Michael Jackson";

  const trackElement = document.createElement("div"); // <div></div>
  trackElement.className = "track";

  const underline = document.createElement("div"); // <div></div>
  underline.className = "underline";

  const trackImage = document.createElement("img"); // <img>
  trackImage.className = "track__img";
  trackImage.src = track.imgSrc;
  trackImage.alt = "Image of " + track.artist;

  const trackInfo = document.createElement("div");
  trackInfo.className = "track__info";

  const trackTitle = document.createElement("h3"); // <h3></h3>
  trackTitle.innerText = track.title; // <h3>Billie Jean</h3>
  trackTitle.className = "track__title";

  const trackArtist = document.createElement("p"); // create <p>
  trackArtist.innerText = track.artist; // create <p>Michael Jackson<p>
  trackArtist.className = "track__artist";

  const btnElement = document.createElement("button"); // <button>
  const playActionElement = document.createElement("img"); // <img>
  playActionElement.src = playBtnActive;
  btnElement.className = "playButton";

  const audioElement = new Audio(track.audioSrc);
  let isPlaying = false; // grundeinstellung für isPlaying

  const showPlayButton = () => {
    playActionElement.src = playBtnActive;
    playActionElement.alt = "Play";
  };
  const showPauseButton = () => {
    playActionElement.src = pauseBtnActive;
    playActionElement.alt = "Pause";
  };

  btnElement.onclick = () => {
    if (isPlaying) {
      //short for isPlaying === true
      audioElement.pause(); // wenn true bewirkt ein click Pause
      showPlayButton();
    } else {
      audioElement.play(); //wenn false bewirkt ein click Play
      showPauseButton();
    }
    isPlaying = !isPlaying; //setzt wert jeweils wieder auf false oder true
  };

  trackElement.append(trackImage, trackInfo, btnElement, underline);
  btnElement.append(playActionElement);
  trackInfo.append(trackTitle, trackArtist);

  return trackElement;
}
