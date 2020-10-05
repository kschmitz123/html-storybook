import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import buttonLogoAndText from "./button-logo-and-text.html";

export default { title: "Components/PlayButton" };

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
export const withLogoAndText = () => buttonLogoAndText;