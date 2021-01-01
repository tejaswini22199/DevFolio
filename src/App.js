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
     <nav>
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/Competitivecoding">Competitivecoding</Link></li>
         <li><Link to="/OpenSource">OpenSource</Link></li>
         <li><Link to="/Blogg" >Blogs</Link></li>
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
