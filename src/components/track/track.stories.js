import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const BillieJean = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
export const EarthSong = () =>
  createTrackElement("Earth Song", "Michael Jackson");
export const SmoothCriminal = () =>
  createTrackElement("Smooth criminal", "Michael Jackson");
