import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Hero from "./Component/Hero";




function App() {
    return (
        
        <BrowserRouter>
          <div className="flex h-screen">
             <div className="ml-[40%] w-3/5 h-screen overflow-y-auto">
             <Hero />
             </div>
           <div className=" w-3/6 h-screen fixed top-0 left-0">
             <Sidebar />
           </div>
          </div>
    
        </BrowserRouter>
    );
}

export default App;
