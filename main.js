let zikrSoni = document.getElementById("h1count");
let zikrNomi = document.getElementById("h1zikrnomi");

let qoshBtn = document.getElementById("buttonB");
let ayirBtn = document.getElementById("buttonC");
let clearBtn = document.getElementById("buttonClear");

let zikr1 = document.getElementById("zikr1");
let zikr2 = document.getElementById("zikr2");
let zikr3 = document.getElementById("zikr3");
let aniqlik = true;
count = 0;

qoshBtn.addEventListener("click", () => {
  if (aniqlik) {
    count++;
    zikrSoni.innerText++;
  }
  if (count >= 33) {
    alert("Zikr soni 33 taga yetti!");
    aniqlik = false;
  }
});
ayirBtn.addEventListener("click", () => {
  if (zikrSoni.innerText > 0) {
    count--;
    aniqlik = true;
    zikrSoni.innerText--;
  }
});
clearBtn.addEventListener("click", () => {
  zikrSoni.innerText = "0";
  count = 0;
  aniqlik = true;
});

zikr1.addEventListener("click", () => {
  zikrSoni.innerText = "0";
  count = 0;
  zikrNomi.innerText = "Subxanalloh";
});
zikr2.addEventListener("click", () => {
  zikrSoni.innerText = "0";
  count = 0;

  zikrNomi.innerText = "Alhamdulillah";
});
zikr3.addEventListener("click", () => {
  zikrSoni.innerText = "0";
  count = 0;

  zikrNomi.innerText = "Allohu Akbar";
});
