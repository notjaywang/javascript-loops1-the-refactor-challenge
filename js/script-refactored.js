let html = '';

const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}

for ( i = 1 ; i <= 10 ; i++) {
  html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
  console.log(html);
}

document.querySelector('main').innerHTML = html;