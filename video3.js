// Going over examples with the DOM and events
console.log("----- Example of using JS outside of window.onload -----");
let x = document.getElementById("test");
console.log(x); // Returns null

// Using window.onload()
window.onload = function () {
  console.log("----- Example of getElementById -----");
  let y = document.getElementById("test");
  console.log("This is the element associated with the id y:", y); // Returns the element

  console.log("----- Example of getElementsByTagName -----");
  let p = document.getElementsByTagName("p");
  console.log("These are the elements associated with the tag p:", p); // Returns the element

  console.log("----- Example of innerHTML -----");
  for (let element of p) {
    console.log(element.innerHTML);
  }

  console.log("----- Example of getElementsByClassName -----");
  let c = document.getElementsByClassName("paragraph");
  console.log("These are the elements associated with the class paragraph:", c); // Returns the element

  // Example of manipulating innerHTML
  //   for (let element of c) {
  //     element.innerHTML = "hello";
  //   }

  // Example of creating an element and appending it to another element
  //   let body = document.getElementById("body");
  //   let new_element = document.createElement("p");
  //   new_element.className = "new_element";
  //   new_element.innerHTML = "New element";
  //   body.appendChild(new_element);

  // Example of events
  let button = document.getElementById("button2");
  button.addEventListener("click", func1);

  //   let body = document.getElementById("body");
  //   let new_element = document.createElement("button");
  //   new_element.id = "button3";
  //   new_element.innerHTML = "click Me (Button3)";
  //   body.appendChild(new_element);

  //   new_element.addEventListener("click", function () {
  //     console.log("hi");
  //   });
};

function func1(e) {
  console.log(e);
  console.log("The click came from", e.target);
}
