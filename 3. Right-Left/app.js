const prev = document.getElementById("prev");
const next = document.getElementById("next");
const img = document.getElementById("slide");
const h3 = document.querySelector("h3");
const pr = document.querySelector(".price");
const p = document.querySelector(".description");
const c = document.querySelector(".container");
const arr = [
  {
    src: "./svg/1.png",
    name: "Nature",
    price: "100$",
    description: `A soft breeze whispered through the tall pines, their needles swaying
          gently under the golden light of the setting sun. `,
    background: "green",
  },
  {
    src: "./svg/2.png",
    name: "Nature_2",
    price: "200$",
    description: `A carpet of moss
          blanketed the forest floor, dotted with wildflowers and fallen leaves.`,
    background: "green",
  },
  {
    src: "./svg/3.png",
    name: "Nature_3",
    price: "300$",
    description: `A carpet of moss
          blanketed the forest floor, dotted with wildflowers and fallen leaves.`,
    background: "red",
  },
];

let i = 0;
img.src = arr[i].src;
h3.textContent = arr[i].name;
pr.textContent = arr[i].price;
p.textContent = arr[i].description;
c.style.backgroundColor = arr[i].background;

const set = () => {
  i++;
  if (arr[i]) {
    // img.src = arr[i];
    img.src = arr[i].src;
    h3.textContent = arr[i].name;
    pr.textContent = arr[i].price;
    p.textContent = arr[i].description;
    c.style.backgroundColor = arr[i].background;
  } else {
    i = 0;
    // img.src = arr[i];
    img.src = arr[i].src;
    h3.textContent = arr[i].name;
    pr.textContent = arr[i].price;
    p.textContent = arr[i].description;
    c.style.backgroundColor = arr[i].background;
  }
};
setInterval(set, 3000);

prev.addEventListener("click", () => {
  i--;
  if (arr[i]) {
    // img.src = arr[i];
    img.src = arr[i].src;
    h3.textContent = arr[i].name;
    pr.textContent = arr[i].price;
    p.textContent = arr[i].description;
    c.style.backgroundColor = arr[i].background;
  } else {
    i = arr.length - 1;
    // img.src = arr[i];
    img.src = arr[i].src;
    h3.textContent = arr[i].name;
    pr.textContent = arr[i].price;
    p.textContent = arr[i].description;
    c.style.backgroundColor = arr[i].background;
  }
});

next.addEventListener("click", () => {
  i++;
  if (arr[i]) {
    // img.src = arr[i];
    img.src = arr[i].src;
    h3.textContent = arr[i].name;
    pr.textContent = arr[i].price;
    p.textContent = arr[i].description;
    c.style.backgroundColor = arr[i].background;
  } else {
    i = 0;
    // img.src = arr[i];
    img.src = arr[i].src;
    h3.textContent = arr[i].name;
    pr.textContent = arr[i].price;
    p.textContent = arr[i].description;
    c.style.backgroundColor = arr[i].background;
  }
});
