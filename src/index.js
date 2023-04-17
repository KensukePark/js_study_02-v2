import "./styles.css";

let count = 0;
const value = document.querySelector("#value");
const btn_0 = document.getElementById("btn_dec");
const btn_1 = document.getElementById("btn_res");
const btn_2 = document.getElementById("btn_inc");

btn_0.addEventListener("click", function () {
  count -= 1;
  value.textContent = count;
});
btn_1.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
});
btn_2.addEventListener("click", function () {
  count += 1;
  value.textContent = count;
});
