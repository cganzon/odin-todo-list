import "./sidebar.css";

const sidebar = () => {
  const sidebar = document.createElement("section");
  const sidebarTitle = document.createElement("h2");
  const projects = document.createElement("div");
  const newProjectButton = document.createElement("button");
  const createProject = document.createElement("div");
  const createProjectInput = document.createElement("input");
  const createProjectButton = document.createElement("button");
  const cancelProjectButton = document.createElement("button");

  sidebarTitle.textContent = "Projects";

  projects.classList.add("projects");

  newProjectButton.classList.add("new-project-button");
  newProjectButton.textContent = "New Project";

  createProject.classList.add("create-project");

  createProjectInput.classList.add("create-project-input");
  createProjectInput.setAttribute("type", "text");
  createProjectInput.setAttribute("placeholder", "Enter project name");

  createProjectButton.classList.add("create-new-project");
  createProjectButton.textContent = "Create";

  cancelProjectButton.classList.add("cancel-new-project");
  cancelProjectButton.textContent = "Cancel";

  createProject.append(
    createProjectInput,
    createProjectButton,
    cancelProjectButton
  );

  sidebar.append(sidebarTitle, projects, newProjectButton, createProject);

  return sidebar;
};

export default sidebar;
