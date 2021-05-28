"use strict";

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Hello, world!"
  ),
  React.createElement(
    "a",
    { src: "https://google.com" },
    React.createElement(
      "h2",
      null,
      "Google\u3060\u3088\uFF5E\u3093"
    )
  )
), document.getElementById('app'));