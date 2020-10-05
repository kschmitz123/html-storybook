import "./button.css";
import buttonText from "./shareButton-text.html";
import buttonLogo from "./shareButton-logo.html";
import buttonLogoAndText from "./shareButton-logo-and-text.html";

export default { title: "Components/ShareButton" };

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
export const withLogoAndText = () => buttonLogoAndText;
