import initialPageLoad from "./initialPageLoad";
import "./styles.css";

initialPageLoad();

const dom = (() => {
  const newProjectButton = document.querySelector(".new-project-button");
  const createProject = document.querySelector(".create-project");
  const createProjectInput = document.querySelector(".create-project-input");
  const cancelNewProjectButton = document.querySelector(".cancel-new-project");

  return { newProjectButton, createProject, createProjectInput, cancelNewProjectButton };
})();

dom.newProjectButton.addEventListener("click", (e) => {
  dom.createProject.classList.remove("hide");
});

dom.cancelNewProjectButton.addEventListener("click", (e) => {
  dom.createProjectInput.value = "";
  dom.createProject.classList.add("hide");
});
