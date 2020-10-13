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
    imgScr:
      "https://w7.pngwing.com/pngs/497/242/png-transparent-michael-jackson-the-experience-logo-bad-lyrics-song-others-text-logo-musician.png",
  });
export const SmoothCriminal = () =>
  createTrackElement({
    title: "Smooth criminal",
    artist: "Michael Jackson",
    imgSrc:
      "https://w7.pngwing.com/pngs/497/242/png-transparent-michael-jackson-the-experience-logo-bad-lyrics-song-others-text-logo-musician.png",
  });
