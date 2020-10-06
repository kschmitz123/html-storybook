import "./button.css";
import favButtonText from "./favoritesButton-text.html";
import favButtonLogo from "./favoritesButton-logo.html";
import favButtonLogoAndText from "./favoritesButton-logo-and-text.html";
import playButtonText from "./playButton-text.html";
import playButtonLogo from "./playButton-logo.html";
import playButtonLogoAndText from "./playButton-logo-and-text.html";
import shareButtonText from "./shareButton-text.html";
import shareButtonLogo from "./shareButton-logo.html";
import shareButtonLogoAndText from "./shareButton-logo-and-text.html";

export default { title: "Components/Buttons" };

export const withFavText = () => favButtonText;
export const withFavLogo = () => favButtonLogo;
export const withFavLogoAndText = () => favButtonLogoAndText;
export const withText = () => playButtonText;
export const withLogo = () => playButtonLogo;
export const withLogoAndText = () => playButtonLogoAndText;
export const withShareText = () => shareButtonText;
export const withShareLogo = () => shareButtonLogo;
export const withShareLogoAndText = () => shareButtonLogoAndText;
