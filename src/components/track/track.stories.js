import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const BillieJean = () =>
  createTrackElement({
    title: "Billie Jean",
    artist: "Michael Jackson",
    imgSrc:
      "https://w7.pngwing.com/pngs/497/242/png-transparent-michael-jackson-the-experience-logo-bad-lyrics-song-others-text-logo-musician.png",
  });
export const EarthSong = () =>
  createTrackElement({
    title: "Earth Song",
    artist: "Michael Jackson",
    imgSrc:
      "https://w7.pngwing.com/pngs/497/242/png-transparent-michael-jackson-the-experience-logo-bad-lyrics-song-others-text-logo-musician.png",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/The_Rainbows_End/TRG_Banks_-_03_-_Walking_on_water.mp3",
  });
export const SmoothCriminal = () =>
  createTrackElement({
    title: "Evening Journey",
    artist: "TRG Banks",
    imgSrc: "https://findicons.com/files/icons/480/weather/256/rainbow.png",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/The_Rainbows_End/TRG_Banks_-_02_-_Evening_journey.mp3",
  });
