import initialPageLoad from "./initialPageLoad";
import Project from "./project";
import "./styles.css";
import {
  newProjectButton,
  projectWrapper,
  projectInput,
  createProjectButton,
  cancelNewProjectButton,
} from "./dom/cacheDOM";

initialPageLoad();

newProjectButton().addEventListener("click", (e) => {
  projectWrapper().classList.remove("hide");
});

createProjectButton().addEventListener("click", (e) => {
  let inputValue = projectInput().value;
  let newProject = new Project(inputValue);
  console.log(newProject);
  const projectsArray = JSON.parse(localStorage.getItem("projects"));
  projectsArray.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projectsArray));
  console.log(JSON.parse(localStorage.projects));
});

cancelNewProjectButton().addEventListener("click", (e) => {
  projectInput().value = "";
  projectWrapper().classList.add("hide");
});
