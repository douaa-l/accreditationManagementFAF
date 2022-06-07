import React from "react"
import { FlexContainer } from "../AccueilAdminFAF/Styles/OrganismesStyle"
import '../App.css'
import OPEvent from "./OPEvent"

class EventContainer extends React.Component{

    componentDidUpdate(){
        console.log(this.props)
    }
  
    render(){
        return(

            <div style={{display:"flex",flexDirection:"column",marginBottom:10,width:100+"%"}}>
            <label style={{fontSize:28, color:"black",marginTop:10}}>Evenements</label>
            <FlexContainer  id="contenaireEvenement">  
            {
               (this.props.listeEvent.length>0)?(
             this.props.listeEvent.map((event,index)=>{
               console.log(event.idOp)        
                 return(
                
                <OPEvent key={index} Ev={event} i={index} list={this.props.listeEvent} actualiser={this.props.actualiser} ></OPEvent>
            )
            })):(
                <p style={{fontSize:20, color:"black",marginTop:10}}>Aucun Evenement trouvé</p>
            )
            }
            
            
            
            </FlexContainer>
        </div>






       
       
        )
    }
}
export default EventContainer;