// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (<>
  
    <div className="flex h-screen bg-gray-100">
    
      <div className="flex-1 flex flex-col">
      <Navbar />
        <div className="p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div></>
  );
};

export default App;
