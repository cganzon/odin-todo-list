import initialPageLoad from "./initialPageLoad";
import "./styles.css";

initialPageLoad();

const dom = (() => {
  const newProjectButton = document.querySelector(".new-project-button");
  const createProject = document.querySelector(".create-project");

  return { newProjectButton, createProject };
})();

dom.newProjectButton.addEventListener("click", (e) => {
  dom.createProject.classList.remove("hide");
});
