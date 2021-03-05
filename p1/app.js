const testGS = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbwGghfBaXwqYT8H-HZowqh2Sn8MDFJtiCDmbxaxU3zLH7ahzXxROJ1LKZn9A-c7pYyoeA/exec";
  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.querySelector("h1").textContent = d[0].status;
    });
};

document.querySelector("button").addEventListener("click", testGS);
