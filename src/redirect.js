import './App.css';
import AccueilAdminFaf from './AccueilAdminFAF/Components/AccueilAdminFaf';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import EvenementPage from './EvenementPage/EvenementPage';
import AgentPage from './AgentPage/AgentPage';
import LoginContainer from './login/LoginContainer';
import Navbar from './AccueilAdminFAF/Components/NavBar';
import WelcomePage from './WelcomePage';


function Redirect() {
  return (
    <div className="App">

<div className="limiter">
 <div className="container-login100"> 
    
 <div className="wrap-login100" style={{position:"relative"}}>
     <BrowserRouter>
    <Navbar/>

    <Switch>

    <Route path="/OP/agents" component={AgentPage}/>
    <Route path="/OP/organismes" component={AccueilAdminFaf}/>
    <Route exact path="/OP" component={WelcomePage}/>
    {/*<Route exact path="/" component={LoginContainer}/>*/}
    <Route path="/OP/evenements" component={EvenementPage}/>
    
    </Switch> 
    </BrowserRouter>
  
    </div>
     </div>

     </div>
    </div>
  );
}

export default Redirect;
