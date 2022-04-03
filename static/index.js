window.onload = function () {
  // Submitting form info
  let form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    data = { firstname: firstname, lastname: lastname };
    let res = addUsers(data);
    res.then(function (result) {
      if (result.status === 200) {
        location.reload();
      }
    });
  });

  // Getting user info from backend
  let table = document.getElementById("list");

  // Making the API call
  let users = getUsers();
  users.then(function (result) {
    // If successful, we create table rows to add the first name, last name and delete button
    if (result.status === 200) {
      for (let row of result.data) {
        console.log("Row", row);
        // Creates the row
        let tr = document.createElement("tr");

        // Creates the th for firstname
        let firstname = row["firstName"];
        let firstname_th = document.createElement("th");
        firstname_th.innerHTML = firstname;

        //  Creates the th for lastname
        let lastname = row["lastName"];
        tr.appendChild(firstname_th);
        let lastname_th = document.createElement("th");
        lastname_th.innerHTML = lastname;
        tr.appendChild(lastname_th);

        // Creates the th for delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete User";

        console.log("Outside delete button", firstname, lastname);

        deleteButton.addEventListener("click", function (e) {
          console.log("In delete button", firstname, lastname);
          deleteUsers(firstname, lastname).then(function (result) {
            if (result.status === 200) {
              location.reload();
            }
          });
        });
        tr.appendChild(deleteButton);

        // Appends the row to the table
        table.appendChild(tr);
      }
    }
  });
};

// Making a GET request
function getUsers() {
  return axios
    .get("/api/getUsers")
    .then((response) => response)
    .catch((error) => console.log(error));
}

// Making a POST request
function addUsers(data) {
  return axios
    .post("/api/addUser", data)
    .then((response) => response)
    .catch((error) => console.log(error));
}

// Making a DELETE request
function deleteUsers(firstname, lastname) {
  return axios
    .delete("/api/deleteUser", {
      params: { firstname: firstname, lastname: lastname },
    })
    .then((response) => response)
    .catch((error) => console.log(error));
}
