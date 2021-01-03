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
     <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-dark bg-dark center">
       <div className="container-fluid">
       <div className="navbar-header">
        {/* <p className="navbar-brand">DEV-FOLIO</p>  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Drop" aria-controls="Drop" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       </div>
       <div className="collapse navbar-collapse" id="Drop">
       <ul className="navbar-nav ml-auto">
         <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
         <li className="nav-item"><Link className="nav-link"  aria-current="page" to="/Competitivecoding">Competitive Coding</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/OpenSource">Open Source</Link></li>
         <li className="nav-item"><Link className="nav-link" to="/Blogg" >Blogs</Link></li>
       </ul>
       </div>
       </div>
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
