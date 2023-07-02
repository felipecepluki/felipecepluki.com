const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map(
  (char, i) => 
    `<span>${char}</span>`
).join();