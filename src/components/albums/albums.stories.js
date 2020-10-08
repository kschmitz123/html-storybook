import "./albums.css";
import albums from "./albums.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/ Albums", decorators: [centered] };

export const Albums = () => albums;
