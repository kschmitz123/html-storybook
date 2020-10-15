export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  const { children, ...otherProps } = props; //rest: takes children from props and assigns new variable other
  Object.assign(element, otherProps); //deshalb hier jetzt other
  if (children) {
    element.append(...children); //spread: takes every element from the children array
  }
  return element;
};
