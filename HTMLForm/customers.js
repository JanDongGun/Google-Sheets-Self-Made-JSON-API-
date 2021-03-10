const customerForm = document.querySelector("#customerForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const phoneNumber = document.querySelector("#phoneNumber");
const city = document.querySelector("#city");
const url =
  "https://script.google.com/macros/s/AKfycbwGghfBaXwqYT8H-HZowqh2Sn8MDFJtiCDmbxaxU3zLH7ahzXxROJ1LKZn9A-c7pYyoeA/exec";

const afterSubmit = (e) => {
  e.preventDefault();

  const info = {
    firstName: firstName.value,
    lastName: lastName.value,
    telephone: phoneNumber.value,
    city: city.value,
  };

  fetch(url, {
    method: "POST",
    cache: "no-cache",
    redirect: "follow",
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
      console.log("something went wrong!");
    });

  customerForm.reset();
};

customerForm.addEventListener("submit", afterSubmit);
