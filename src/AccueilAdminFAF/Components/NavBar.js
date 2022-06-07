import React from "react";
import AccueilAdminFaf from "./AccueilAdminFaf";
import AgentPage from "../../AgentPage/AgentPage"
import EvenementPage from "../../EvenementPage/EvenementPage"
import { NavMenu,Nav,NavLink,Bars } from "./NavbarElement";



const Navbar= ()=>{
return(
<Nav> 
  <NavLink exact to="/OP">
       <img src="/assets/images/LogoFaf.png" alt="logoFAF" class="navbar-brand navbar-logo" href="#" style={{height:80,width:80,marginLeft:20+"px"}}></img>
 </NavLink>
 <NavMenu>
    {/* <NavLink to="/organismes" > ORGANISMES</NavLink>
    <NavLink to="/agents" >AGENTS </NavLink>
    <NavLink to="/evenements" >EVENEMENTS </NavLink>*/}

    <NavLink to="/OP/organismes" > ORGANISMES</NavLink>
    <NavLink to="/OP/agents" >AGENTS </NavLink>
    <NavLink to="/OP/evenements" >EVENEMENTS </NavLink> 
   {/* <NavLink exact to="/" >
    <span class="material-icons md-31" >logout</span>
     </NavLink> */} 
    </NavMenu>
  <Bars/>
</Nav>

);


};

export default Navbar;