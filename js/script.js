const box = document.getElementById("list");
let x = 0;

for (let i = 1; i <= 100; i++) {
 if (i % 15 == 0) {
  x = "fizzbuzz";
 } else if (i % 3 == 0) {
  x = "fizz";
 } else if (i % 5 == 0) {
  x = "buzz";
 } else {
  x = i;
 }
 if (isNaN(x)) {
  box.innerHTML += `<li class="box box-${x}">${x}</li>`;
 } else {
  box.innerHTML += `<li class="box">${x}</li>`;
 }
}
