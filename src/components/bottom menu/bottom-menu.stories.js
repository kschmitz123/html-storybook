import "./bottom-menu.css";
import bottomMenu from "./bottom-menu.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Bottom Menu", decorators: [centered] };

export const BottomMenu = () => bottomMenu;
