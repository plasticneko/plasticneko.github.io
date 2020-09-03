const colors = [
  "rgb(32, 24, 14)",
  "rgb(240, 253, 204)",
  "rgb(99, 206, 196)",
  "rgb(135, 110, 223)",
  "rgb(219, 3, 169)",
  "rgb(143, 207, 209)",
  "rgb(223, 94, 136)",
  "rgb(246, 171, 108)",
  "rgb(246, 239, 166)"
];

setTimeout(() => {
  setDate();
}, 500);

setInterval(() => {
  setBackground();
}, 500);

function setDate() {
  const date = new Date("2019/11/30");

  const days = Math.floor(
    (Date.parse(new Date()) - Date.parse(date)) / 86400000
  );

  console.log(`it's been ${days} days, you square.`);

  document.getElementById("text").innerHTML = `\u{1F624} <br/> you can't brainwash me anymore, freedom is too sweet`;
}

function setBackground() {
  const random = Math.floor(Math.random() * colors.length);
  const current = document.body.style.backgroundColor;

  if (current == colors[random] || !colors[random]) {
    return setBackground();
  }

  document.body.style.backgroundColor = colors[random];
}
