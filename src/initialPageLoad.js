import header from "./pageComponts/header/header";
import sidebar from "./pageComponts/sidebar/sidebar";

const initialPageLoad = () => {
  document.body.append(header(), sidebar());

  if (localStorage.projects) {
    console.log(JSON.parse(localStorage.projects));
  } else {
    localStorage.projects = JSON.stringify([]);
  }
};

export default initialPageLoad;
