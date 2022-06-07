import React from "react";
import { Container, ImageBox, Title } from "./AccueilAdminFAF/Styles/OrganismesStyle";
import SlideShow from "./SlideShow";

class WelcomePage extends React.Component{

    render(){
       return(
        <Container style={{flexDirection:"column",width:100+"%"}} >
           
        <Title style={{margin:"auto"}}>Bienvenue sur le site de gestion des demandes d'accréditation</Title>

            <SlideShow/>        
      </Container>
        ) 
    }
        
    
}
export default WelcomePage