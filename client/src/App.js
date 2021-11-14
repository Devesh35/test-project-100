import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";

function App() {

  const nav = useNavigate();

  useEffect(() => {
    nav('/')
    // eslint-disable-next-line
  }, [])

  // Screen 1,2,3 uses bootstrap css
  // Screen 4,5 uses screen.css
  return (
    <>
      <Routes>
        <Route path='/' element={<Screen1 />} />
        <Route path='/1' element={<Screen1 />} />
        <Route path='/2' element={<Screen2 />} />
        <Route path='/3' element={<Screen3 />} />
        <Route path='/4' element={<Screen4 />} />
        <Route path='/5' element={<Screen5 />} />
      </Routes>
    </>
  );
}

export default App;
