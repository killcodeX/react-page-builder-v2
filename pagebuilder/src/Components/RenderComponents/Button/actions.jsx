export function onAction(action, navigate, payload) {
  switch (action) {
    case "click":
      return console.log("onclik");
    case "navigate":
      return navigate("/preview");
    case "alert":
      return alert("clicked");
    default:
      return console.log("clicked!");
  }
}
