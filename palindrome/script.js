const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const input = document.querySelector(".input-text");
const palindrome = function () {
  const word = input.value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = [...end].reverse().join("");
  start == flip
    ? (result.innerHTML = `${word} is a palindrome.
    `)
    : (result.innerHTML = `${word} is NOT a palindrome.`);
};

btn.addEventListener("click", palindrome);
