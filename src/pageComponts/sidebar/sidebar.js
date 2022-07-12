import "./sidebar.css";

const sidebar = () => {
  const sidebar = document.createElement("section");
  const sidebarTitle = document.createElement("h2");

  sidebarTitle.textContent = "Projects";

  sidebar.append(sidebarTitle);

  return sidebar;
};

export default sidebar;
