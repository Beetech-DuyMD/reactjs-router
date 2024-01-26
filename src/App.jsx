import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

import AuthBtn from "./components/main/AuthBtn";
import Bottom from "./components/main/bottom/bottom";
import Cotnent from "./components/main/content/Cotnent";
import Header from "./components/main/header";
import Trending from "./components/main/trending/Trending";

function App() {
  return (
    <>
      <div className="grid  md:grid-cols-5">
        <Nav />
        <main className="md:col-span-4 bg-cyan-50 px-12 py-16">
          <AuthBtn />
          <Header />
          <Trending />
          <Outlet />
          <Bottom />
        </main>
      </div>
    </>
  );
}

export default App;
