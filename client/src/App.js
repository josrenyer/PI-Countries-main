import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CardDetail from "./components/Country/CardDetail"
import Activity from "./components/Activity/Activity"


function App() {

  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Landing/>}/>
    <Route exact path="/Home" element={<Home/>}/>
    <Route exact path="/countries/:id" element={<CardDetail/>}/>
    <Route exact path="/AddActivity" element={<Activity/>}/>
    </Routes>
    </div>
  );
}

export default App;
