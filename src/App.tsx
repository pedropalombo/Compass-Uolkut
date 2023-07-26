import { Header } from "./components/Header";
import "./App.module.css";
import { DisplayLogin } from "./components/DisplayLogin";
import { Profile } from "./components/Profile";

export const App = () => {
  return (

    //does 'DisplayLogin' have to be on root..?
    <>
      <Header />
      {/*<DisplayLogin />*/}
      <Profile />
      
    </>
  );
};
