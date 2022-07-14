const saveProject = (project) => {
  const projectsArray = JSON.parse(localStorage.getItem("projects"));
  projectsArray.push(project);
  localStorage.setItem("projects", JSON.stringify(projectsArray));
  console.log(JSON.parse(localStorage.projects));
};

export default saveProject;
