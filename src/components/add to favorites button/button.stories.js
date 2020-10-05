import "./button.css";
import favButtonText from "./favoritesButton-text.html";
import favButtonLogo from "./favoritesButton-logo.html";
import favButtonLogoAndText from "./favoritesButton-logo-and-text.html";

export default { title: "Components/FavoritesButton" };

export const withText = () => favButtonText;
export const withLogo = () => favButtonLogo;
export const withLogoAndText = () => favButtonLogoAndText;
