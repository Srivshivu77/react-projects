import { useSelector } from "react-redux";
import Controls from "./Controls";
import DisplayCounter from "./DisplayCounter";
import PrivacyMessage from "./PrivacyMessage";

const Header = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
      <div className="col-lg-6 mx-auto">
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls></Controls>
      </div>
    </div>
  );
};

export default Header;
