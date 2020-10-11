import "./recently-played.css";

import recentlyPlayed from "./recently-played.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Recently Played", decorators: [centered] };

export const recent = () => recentlyPlayed;
