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
});

cancelNewProjectButton().addEventListener("click", (e) => {
  projectInput().value = "";
  projectWrapper().classList.add("hide");
});
