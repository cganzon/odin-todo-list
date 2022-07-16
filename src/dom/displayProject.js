import { projects } from "./cacheDOM";

const displayProject = (project) => {
  const projectTitle = document.createElement("li");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = project.title;
  projects().append(projectTitle);
};

export default displayProject;
