import './App.css';
import AccueilAdminFaf from './AccueilAdminFAF/Components/AccueilAdminFaf';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import EvenementPage from './EvenementPage/EvenementPage';
import AgentPage from './AgentPage/AgentPage';
import Navbar from './AccueilAdminFAF/Components/NavBar';
import LoginContainer from './login/LoginContainer';
import Redirect from './redirect';

function App() {
  return (
    <div className="App">

<div className="limiter">
 <div className="container-login100"> 
    
 <div className="wrap-login100">
      <BrowserRouter>
 

    <Switch>
    <Route path="/"exact component={LoginContainer}/>
    <Route path="/OP" exact component={Redirect}/>
    
    
    </Switch> 
    
  </BrowserRouter>
  
    </div>
     </div>

     </div>
    </div>
  );
}

export default App;
