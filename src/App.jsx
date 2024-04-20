import Header from "./components/headerComponents/Header.jsx"

import {Outlet} from "react-router-dom";

function App() {



  return (
    <>
    <Header></Header>
      <div>main</div>
      <Outlet />
    </>
  );
}

export default App;
