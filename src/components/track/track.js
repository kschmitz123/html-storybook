import "./track.css";
import billieJean from "../../assets/billie-jean.png";
import playBtnActive from "../../assets/playbutton-active.svg";

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

export function createTrackElement(title, artist) {
  //   const title = "Billie Jean";
  //   const artist = "Michael Jackson";

  const trackElement = document.createElement("div"); // <div></div>
  trackElement.className = "track";

  const trackImage = document.createElement("img"); // <img>
  trackImage.src = billieJean;
  trackImage.alt = "Image of " + artist;

  const trackInfo = document.createElement("div");
  trackInfo.className = "track__info";

  const trackTitle = document.createElement("h3"); // <h3></h3>
  trackTitle.innerText = title; // <h3>Billie Jean</h3>
  trackTitle.className = "track__title";

  const trackArtist = document.createElement("p"); // create <p>
  trackArtist.innerText = artist; // create <p>Michael Jackson<p>
  trackArtist.className = "track__artist";

  const btnElement = document.createElement("button"); // <button>
  const playActionElement = document.createElement("img"); // <img>
  playActionElement.src = playBtnActive;
  btnElement.className = "playbutton";
  btnElement.onclick = function () {
    alert("Click");
  };

  trackElement.append(trackImage, trackInfo, btnElement);
  btnElement.append(playActionElement);
  trackInfo.append(trackTitle, trackArtist);

  return trackElement;
}
