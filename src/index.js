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
import saveProject from "./localStorage/saveProject";
import displayProject from "./dom/displayProject";

initialPageLoad();

newProjectButton().addEventListener("click", (e) => {
  projectWrapper().classList.remove("hide");
});

createProjectButton().addEventListener("click", (e) => {
  let project = new Project(projectInput().value);
  saveProject(project);
  displayProject(project)
  projectInput().value = "";
  projectWrapper().classList.add("hide");
});

cancelNewProjectButton().addEventListener("click", (e) => {
  projectInput().value = "";
  projectWrapper().classList.add("hide");
});
