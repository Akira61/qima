// import viteLogo from '/vite.svg'
import Landing from "./pages/Landing/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes> 
  );
}

export default App;
