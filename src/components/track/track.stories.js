import { createTrackElement } from "./track";
import billieJeanImg from "../../assets/billie-jean.png";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

// TRACKLIST GENERIEREN
export const songs = () => {
  const eveningJourney = {
    title: "Evening Journey",
    artist: "TRG Banks",
    imgSrc: "https://findicons.com/files/icons/480/weather/256/rainbow.png",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/The_Rainbows_End/TRG_Banks_-_02_-_Evening_journey.mp3",
  };

  const billieJean = {
    title: "Billie Jean",
    artist: "Michael Jackson",
    imgSrc: billieJeanImg,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/The_Rainbows_End/TRG_Banks_-_09_-_Back_on_the_road.mp3",
  };
  const smoothCriminal = {
    title: "Earth Song",
    artist: "Michael Jackson",
    imgSrc:
      "https://i.pinimg.com/originals/2c/7d/99/2c7d99b45744abba70aea6be9127ea34.png",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/The_Rainbows_End/TRG_Banks_-_03_-_Walking_on_water.mp3",
  };

  const tracklist = [eveningJourney, billieJean, smoothCriminal];

  const container = document.createElement("div");

  tracklist.forEach((track) => {
    const trackElement = createTrackElement(track);
    container.append(trackElement);
  });

  return container;
};
