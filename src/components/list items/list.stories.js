import "./list.css";

import themes from "./li-themes.html";
import ringtoneCutter from "./li-ringtone-cutter.html";
import listMenu from "./list-menu.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/List items", decorators: [centered] };

export const Themes = () => themes;
export const RingtoneCutter = () => ringtoneCutter;
export const ListMenu = () => listMenu;
