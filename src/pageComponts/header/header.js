import "./header.css";

const header = () => {
  const header = document.createElement("header");
  const title = document.createElement("h1");

  title.textContent = "Todo List";

  header.append(title);

  return header;
};

export default header;
