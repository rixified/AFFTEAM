const url = `https://api.thecatapi.com/v1/images/search?limit=4`; // Change limit to 5
const api_key = "MM4ElURC9w1QaqI5S8X1PJOQ0xsHFr8h74ZAkz1YcYSUdPzeINbe5lo8nubku4ZR"

fetch(url, {
  headers: {
    'x-api-key': api_key
  }
})
.then((response) => {
  return response.json();
})
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    image.src = `${imageData.url}`;
        
    let textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.classList.add('text-box');
    textBox.placeholder = 'Enter text here';

    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image);
    gridCell.appendChild(textBox);
      
    document.getElementById('grid').appendChild(gridCell);
    
  });
})
.catch(function(error) {
  console.log(error);
});
