import React from "react"
import { Container,Filtre,FiltrageBox,InputFiltrage,SelectCateg,Button,GestionOP } from "../AccueilAdminFAF/Styles/OrganismesStyle"
import ListeAgents from "../EvenementPage/ListeAgents"
import Zones from "./zones"


class AgentPage extends React.Component{
    
    render(){
        const op={url:"getAgents.php",idOP:0,idEvent:0}
        return(
            <Container>
                <GestionOP>
                    <FiltrageBox>
                    <label style={{fontWeight:"bold",justifyContent:"center",color:"#57b846",fontSize:"x-large",marginBottom:50,marginTop:5}}>Filtrage</label>
                        <Filtre >
                            <label>nom</label>
                            <InputFiltrage id="filtreNom" type="text" ></InputFiltrage>
                        </Filtre>
                        <Filtre >
                            <label>fonction</label>
                            <SelectCateg id="filtreFonction" name="fonction" >
                                <option>Journaliste</option>
                                <option>Photographe</option>
                                <option>CameraMan</option>
                            </SelectCateg>
                        </Filtre>
                        <Button >Filtrer</Button>
                    </FiltrageBox>
                    <Zones/>

                                 </GestionOP>
            <ListeAgents op={op}></ListeAgents>
            </Container>
            
            )
    }
}
export default AgentPage