import { Outlet } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
}

export default App;
