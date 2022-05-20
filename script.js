import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

var colors = [
'#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857'];

var quote = [
{ quote: "The only person you are destined to become is the person you decide to be.", author: "-Ralph Waldo Emerson" },
{ quote: "If you can dream it, you can achieve it.", author: "-Zig Ziglar" },
{ quote: "In order to succeed, your desire for success should be greater than your fear of failure.", author: "-Bill Cosby" },
{ quote: "Dream big and dare to fail", author: "-Norman Vaughan" },
{ quote: "When I let go of what I am, I become what I might be.", author: "-Lao Tzu" },
{ quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", author: "-Leonardo da Vinci" },
{ quote: "Eighty percent of success is showing up.", author: "-Woody Allen" },
{ quote: "It’s not the years in your life that count. It’s the life in your years.", author: "-Abraham Lincoln" },
{ quote: "A truly rich man is one whose children run into his arms when his hands are empty.", author: "-Unknown" }];


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  cvla() {
    const random = Math.floor(Math.random() * 10);
    {/*ვცვლით ფერს*/}
    document.getElementById("wrapper").style.backgroundColor = colors[random];
    document.getElementById("new-quote").style.backgroundColor = colors[random];
    document.getElementById("tweet-quote").style.backgroundColor = colors[random];
    document.getElementById("text").style.color = colors[random];
    document.getElementById("author").style.color = colors[random];
    {/*ქვემოთ მოცემულით შევცვლით ციტატებს*/}
    document.getElementById('text').innerHTML = quote[random].quote;
    document.getElementById('author').innerHTML = quote[random].author;
  }
  render() {
    const random = Math.floor(Math.random() * 10);
    const color = { color: colors[random] };
    const background = { backgroundColor: colors[random] };
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper", style: background }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "text", style: color }, /*#__PURE__*/React.createElement("h1", null, quote[random].quote)), /*#__PURE__*/
      React.createElement("div", { id: "author", style: color }, /*#__PURE__*/React.createElement("p", null, quote[random].author)), /*#__PURE__*/
      React.createElement("div", { id: "box" }, /*#__PURE__*/
      React.createElement("a", { href: "twitter.com/intent/tweet", target: "_blank", id: "tweet-quote", style: background }, "tweet"), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.cvla, style: background }, "button")))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));