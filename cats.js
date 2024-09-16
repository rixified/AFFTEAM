const url = `https://api.thecatapi.com/v1/images/search?limit=5`; // Load 5 images
const api_key =
  "MM4ElURC9w1QaqI5S8X1PJOQ0xsHFr8h74ZAkz1YcYSUdPzeINbe5lo8nubku4ZR";

fetch(url, {
  headers: {
    "x-api-key": api_key,
  },
})
  .then((response) => response.json())
  .then((data) => {
    let imagesData = data;
    imagesData.map(function (imageData) {
      let image = document.createElement("img");
      image.src = `${imageData.url}`;

      let infoBox = document.createElement("div");
      infoBox.classList.add("info-box");

      let header = document.createElement("h3");
      header.innerText = "Cat Image Info";

      let paragraph = document.createElement("p");
      paragraph.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

      infoBox.appendChild(header);
      infoBox.appendChild(paragraph);

      let gridCell = document.createElement("div");
      gridCell.classList.add("col");
      gridCell.classList.add("col-lg");
      gridCell.appendChild(image);
      gridCell.appendChild(infoBox);

      document.getElementById("grid").appendChild(gridCell);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
