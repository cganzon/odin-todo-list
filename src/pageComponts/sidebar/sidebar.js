import "./sidebar.css";

const sidebar = () => {
  const sidebar = document.createElement("section");
  const sidebarTitle = document.createElement("h2");
  const projects = document.createElement("div");
  const newProjectButton = document.createElement("button");
  const projectWrapper = document.createElement("div");
  const projectInput = document.createElement("input");
  const createProjectButton = document.createElement("button");
  const cancelProjectButton = document.createElement("button");

  sidebarTitle.textContent = "Projects";

  projects.classList.add("projects");

  newProjectButton.classList.add("new-project-button");
  newProjectButton.textContent = "New Project";

  projectWrapper.classList.add("project-wrapper", "hide");

  projectInput.classList.add("project-input");
  projectInput.setAttribute("type", "text");
  projectInput.setAttribute("placeholder", "Enter project name");

  createProjectButton.classList.add("create-project-button");
  createProjectButton.textContent = "Create";

  cancelProjectButton.classList.add("cancel-project-button");
  cancelProjectButton.textContent = "Cancel";

  projectWrapper.append(
    projectInput,
    createProjectButton,
    cancelProjectButton
  );

  sidebar.append(sidebarTitle, projects, newProjectButton, projectWrapper);

  return sidebar;
};

export default sidebar;
