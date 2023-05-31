import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Theme } from "./Theme";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header
      className="container shadow-2xl rounded-t-lg flex items-center mx-auto text-center 
    justify-between py-7  dark:bg-neutral-800 dark:text-amber-400
     dark:border-b-2 dark:border-amber-400"
    >
      <Navigation />
      <Theme />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
