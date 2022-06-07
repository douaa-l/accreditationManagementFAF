import React from "react"
import {FlexContainer} from '../Styles/OrganismesStyle'
import OPCard from './OPCard'


class OPContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            nbElements:props.listeOP.length,
            refus:0
           
        }
                
    }

 
    

 
    render(){
        const afficher=""
        
        return(
        <div  id="contenaireOP" style={{display:"flex",flexDirection:"column",marginBottom:10,width:100+"%"}}>
            <label style={{fontSize:28, color:"black",marginTop:10}}>Organismes</label>
            <FlexContainer >  
            {
                (this.props.listeOP.length>0)?(
             this.props.listeOP.map((unOP,index)=>{
               console.log(unOP.idOp)        
                 return(
                     
               
                <OPCard actualiser={this.props.actualiser} key={index} op={unOP} i={index} list={this.props.listeOP} refus={this.props.refus} traitement={this.props.traitement} demande={this.props.demande} accredites={this.props.accredites} afficherAccredites={this.props.afficherAccredites} afficherDemandes={this.props.afficherDemandes} afficherRefus={this.props.afficherRefus}></OPCard>
            )
            })):(
                <p style={{fontSize:20, color:"black",marginTop:10}}>Aucun Organisme trouvé</p>
            )
            }
            
            
            
            </FlexContainer>
        </div>
        )
    }
}
export default OPContainer