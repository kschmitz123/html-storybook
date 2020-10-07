import "./playericons.css";
import playlist from "./playlist.html";
import shuffle from "./shuffle.html";
import playerIconList from "./playericon-list.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Player Icons", decorators: [centered] };

export const Playlist = () => playlist;
export const Shuffle = () => shuffle;
export const PlayerIconList = () => playerIconList;
