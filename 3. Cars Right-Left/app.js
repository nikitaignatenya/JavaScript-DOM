const prev = document.getElementById("prev");
const next = document.getElementById("next");
const img = document.getElementById("slide");
const arr = [
  "./svg/1.png",
  "./svg/2.png",
  "./svg/3.png",
  "./svg/4.png",
  "./svg/5.png",
];

let i = 0;
img.src = arr[i];

prev.addEventListener("click", () => {
  i--;
  if (arr[i]) {
    img.src = arr[i];
  } else {
    i = arr.length - 1;
    img.src = arr[i];
  }
});

next.addEventListener("click", () => {
  i++;
  if (arr[i]) {
    img.src = arr[i];
  } else {
    i = 0;
    img.src = arr[i];
  }
});
