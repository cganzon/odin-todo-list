import initialPageLoad from "./initialPageLoad";
import "./styles.css";

initialPageLoad();

const dom = (() => {
  const newProjectButton = document.querySelector(".new-project-button");
  const projectWrapper = document.querySelector(".project-wrapper");
  const projectInput = document.querySelector(".project-input");
  const cancelNewProjectButton = document.querySelector(".cancel-project-button");

  return { newProjectButton, projectWrapper, projectInput, cancelNewProjectButton };
})();

dom.newProjectButton.addEventListener("click", (e) => {
  dom.projectWrapper.classList.remove("hide");
});

dom.cancelNewProjectButton.addEventListener("click", (e) => {
  dom.projectInput.value = "";
  dom.projectWrapper.classList.add("hide");
});
