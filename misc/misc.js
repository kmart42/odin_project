const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  console.log.target;
});
btn.addEventListener("click", (e) => {
  e.target.style.background = "blue";
});

const container = document.querySelector("#container");

const a1 = document.createElement("p");
a1.classList.add("a1");
a1.textContent = "Hey I'm red!";
a1.style.color = "red";
container.appendChild(a1);

const a2 = document.createElement("h3");
a2.classList.add("a2");
a2.textContent = "I'm a blue h3!";
a2.style.color = "blue";
container.appendChild(a2);

const a3 = document.createElement("div");
a3.classList.add("a3");
a3.style["background-color"] = "pink";
a3.style["border-color"] = "black";

const a31 = document.createElement("h1");
a31.textContent = "I'm a div!";
a3.appendChild(a31);

const a32 = document.createElement("p");
a32.textContent = "ME TOO!";
a3.appendChild(a32);

container.appendChild(a3);
