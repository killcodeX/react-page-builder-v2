

export function onAction(action) {
  switch (action) {
    case "click":
      return console.log("onclik");
    case "navigate":
      return console.log("navigate");
    default:
      return console.log("clicked!");
  }
}
