const form = document.querySelector("form");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim(); // trim() remove whitespace in the input fields
  const lastNameValue = lastName.value.trim();
  const emailAddressValue = emailAddress.value.trim();
  const passwordValue = password.value.trim();

  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  if (firstNameValue === "") {
    invalidFor(firstName, "First Name cannot be empty");
  } else {
    successFor(firstName);
  }

  if (lastNameValue === "") {
    invalidFor(lastName, "Last Name cannot be empty");
  } else {
    successFor(lastName);
  }

  if (emailAddressValue === "") {
    invalidFor(emailAddress, "Email cannot be empty");
  } else if (!emailRegex.test(emailAddressValue)) {
    invalidFor(emailAddress, "Not a valid email");
  } else {
    successFor(emailAddress);
  }

  if (passwordValue === "") {
    invalidFor(password, "Password cannot be empty");
  } else {
    successFor(password);
  }
}

function invalidFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "field-group error";
  small.innerText = message;
}

function successFor(input) {
  const formControl = input.parentElement;
  formControl.className = "field-group success";
}

// function isEmail(emailAddressValue) {
//   return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
//     emailAddressValue
//   );
// }

// function checkEmail() {
//   const emailRegex =
//     /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
//   const emailAddressValue = emailAddress.value.trim();

//   if (!emailRegex.test(emailAddressValue)) {
//     emailAddress.style.border = "1px solid hsl(354, 100%, 66%)";
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     formControl.className = "field-group error";
//     small.innerText = message;
//     return false;
//   } else {
//     return true;
//   }
// }
