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
    body: JSON.stringify({ name: "donggon" }), // body data type must match "Content-Type" header
  });
};
document.querySelector("#addRow").addEventListener("click", addRow);
