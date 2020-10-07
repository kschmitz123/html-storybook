import "./button.css";

import favButton from "./favoritesButton.html";
import playButton from "./playButton.html";
import shareButton from "./shareButton.html";
import followButton from "./followButton.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Buttons", decorators: [centered] };

export const FavButton = () => favButton;
export const PlayButton = () => playButton;
export const ShareButton = () => shareButton;
export const FollowButton = () => followButton;
