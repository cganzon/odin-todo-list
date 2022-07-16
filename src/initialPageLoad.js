import displayProject from "./dom/displayProject";
import header from "./pageComponts/header/header";
import sidebar from "./pageComponts/sidebar/sidebar";

const initialPageLoad = () => {
  document.body.append(header(), sidebar());
  
  if (localStorage.projects) {
    console.log(JSON.parse(localStorage.projects));
    const currentProjects = JSON.parse(localStorage.getItem("projects"));
    currentProjects.forEach((project) => displayProject(project));
  } else {
    localStorage.projects = JSON.stringify([]);
  }
};

export default initialPageLoad;
