import header from "./pageComponts/header/header";
import sidebar from "./pageComponts/sidebar/sidebar";

const initialPageLoad = () => {
  document.body.append(header(), sidebar());
};

export default initialPageLoad;
