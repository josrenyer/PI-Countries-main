import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CardDetail from "./components/Country/CardDetail"
import Activity from "./components/Activity/Activity"


function App() {

  return (
    <div className="App">
    <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/countries/:id" component={CardDetail}/>
    <Route exact path="/AddActivity" component={Activity}/>
    </Switch>
    </div>
  );
}

export default App;
