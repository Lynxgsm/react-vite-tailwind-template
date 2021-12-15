import { useEffect, useState } from "react";
import { ContextualMenu } from "./components/ContextualMenu";

function App() {
  const [showContextualMenu, setshowContextualMenu] = useState(false);
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("click", (e) => {
      toggleContextualMenu();
    });

    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      setcoords({ x: e.clientX, y: e.clientY });
      toggleContextualMenu();
    });
  }, []);

  const toggleContextualMenu = () => {
    setshowContextualMenu((previousState) =>
      setshowContextualMenu(!previousState)
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1 className="text-4xl">This is a react + vite + tailwind template</h1>
      {showContextualMenu && <ContextualMenu coords={coords} />}
    </div>
  );
}

export default App;
