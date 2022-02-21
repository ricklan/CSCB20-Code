// Example of JSON and functional programming

// Example of arrow functions
sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2));

f2 = (a) => {
  console.log(a);
  return a(1, 2);
};

// Passing in a function
console.log(f2(sum));

window.onload = function () {
  let body = document.getElementById("body");
  let getButton = document.createElement("button");
  getButton.id = "getButton";
  getButton.innerHTML = "Click me to see the data";
  getButton.addEventListener("click", function () {
    getInfo().then(function (result) {
      console.log("The result of this get request:", result);
      let div = document.getElementById("data");
      for (let item in result.data) {
        let p = document.createElement("p");
        p.innerHTML = item + ": " + result.data[item];
        div.appendChild(p);
      }
    });
  });
  body.appendChild(getButton);
};

// Making a get request
url = "http://localhost:5000";
function getInfo() {
  return axios
    .get(url + "/api/getData")
    .then((response) => response)
    .catch((error) => console.log(error));
}
