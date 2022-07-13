import initialPageLoad from "./initialPageLoad";
import "./styles.css";
import {
  newProjectButton,
  projectWrapper,
  projectInput,
  cancelNewProjectButton,
} from "./dom/cacheDOM";

initialPageLoad();

newProjectButton().addEventListener("click", (e) => {
  projectWrapper().classList.remove("hide");
});

cancelNewProjectButton().addEventListener("click", (e) => {
  projectInput().value = "";
  projectWrapper().classList.add("hide");
});
