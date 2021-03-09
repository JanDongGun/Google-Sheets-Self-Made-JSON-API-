const testGS = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbwGghfBaXwqYT8H-HZowqh2Sn8MDFJtiCDmbxaxU3zLH7ahzXxROJ1LKZn9A-c7pYyoeA/exec";
  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.querySelector("h1").textContent = d[0].status;
    });
};

document.querySelector("#click").addEventListener("click", testGS);

const addRow = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbwGghfBaXwqYT8H-HZowqh2Sn8MDFJtiCDmbxaxU3zLH7ahzXxROJ1LKZn9A-c7pYyoeA/exec";
  fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    body: JSON.stringify({
      firstName: "tigon",
      lastName: "trannguyen",
      telephone: "3004232",
    }), // body data type must match "Content-Type" header
  });
};
document.querySelector("#addRow").addEventListener("click", addRow);

const removeRow = (type, value) => {
  const url = `https://script.google.com/macros/s/AKfycbwGghfBaXwqYT8H-HZowqh2Sn8MDFJtiCDmbxaxU3zLH7ahzXxROJ1LKZn9A-c7pYyoeA/exec?type=${type}&value=${value}`;
  fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    body: JSON.stringify({}), // body data type must match "Content-Type" header
  });
};

document.querySelector("#removeRow").addEventListener("click", (e) => {
  const value = document.querySelector("#name").value;
  removeRow("delete", value);
});

const editRow = (type, value) => {
  const url = `https://script.google.com/macros/s/AKfycbwGghfBaXwqYT8H-HZowqh2Sn8MDFJtiCDmbxaxU3zLH7ahzXxROJ1LKZn9A-c7pYyoeA/exec?type=${type}&value=${value}`;
  fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    body: JSON.stringify({}), // body data type must match "Content-Type" header
  });
};

document.querySelector("#editRow").addEventListener("click", (e) => {
  const valueName = document.querySelector("#name").value.trim();
  const valueFirst = document.querySelector("#first").value.trim();
  const valueLast = document.querySelector("#last").value.trim();
  console.log(valueName);
  console.log(valueFirst);
  console.log(valueLast);
  editRow("edit", `${valueName}:${valueFirst}:${valueLast}`);
});
