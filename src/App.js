import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Competitivecoding from './Components/Competitivecoding';
import OpenSource from './Components/OpenSource';
import Blogg from './Components/Blogg';
import Home from './Components/Home';
function App() {
  return (
   <div className="wrapper">
      <BrowserRouter>
     <nav className="collapse navbar-collapse">
       <ul className="navbar-nav">
         <li className="nav-item"><Link to="/">Home</Link></li>
         <li className="nav-item"><Link to="/Competitivecoding">Competitive Coding</Link></li>
         <li className="nav-item"><Link to="/OpenSource">Open Source</Link></li>
         <li className="nav-item"><Link to="/Blogg" >Blogs</Link></li>
       </ul>
      </nav>
     
      <Switch>
        <Route exact path="/">
          <Home/>
          </Route>
        <Route exact path="/Competitivecoding">
          <Competitivecoding/>
        </Route>
        <Route exact path="/OpenSource">
          <OpenSource/>
        </Route>
        <Route exact path="/Blogg">
          <Blogg/>
        </Route>
      </Switch>
      </BrowserRouter>
   </div>




  );
}

export default App;
