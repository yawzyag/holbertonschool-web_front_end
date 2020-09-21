const changeMode = (
  size = 0,
  weight = "",
  transform = "",
  background = "",
  color = ""
) => {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};

const main = () => {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const para = document.createElement("p");
  const node = document.createTextNode("Welcome Holberton!");
  para.appendChild(node);

  const button1 = document.createElement("button");
  const node1 = document.createTextNode("Spooky");
  button1.appendChild(node1);

  const button2 = document.createElement("button");
  const node2 = document.createTextNode("Dark mode");
  button2.appendChild(node2);

  const button3 = document.createElement("button");
  const node3 = document.createTextNode("Scream mode");
  button3.appendChild(node3);

  button1.addEventListener("click", () => {
    spooky();
  });
  button2.addEventListener("click", () => {
    darkMode();
  });
  button3.addEventListener("click", () => {
    screamMode();
  });

  document.body.appendChild(para);
  document.body.appendChild(button1);
  document.body.appendChild(button2);
  document.body.appendChild(button3);
};

main();
