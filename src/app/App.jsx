import CleaningPage from "../pages/cleaningPage/CleaningPage.jsx";
import Logo from "../assets/icons/larsen-logo.svg?react";
import AppStyle from "./appStyle.js";

const App = () => {
  return (
    <AppStyle>
      <header>
        <div className="logo">
          <Logo />
        </div>
        <hr className="horizontal-line" />
      </header>
      <CleaningPage />
    </AppStyle>
  );
};

export default App;
