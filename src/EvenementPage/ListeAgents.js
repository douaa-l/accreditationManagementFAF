import React from 'react'
import { FlexContainer } from '../AccueilAdminFAF/Styles/OrganismesStyle';
import axios from 'axios';
import AGCard from '../AgentPage/AGCard';
import AccepterRefuser from './AccepterRefuser';

class ListeAgents extends React.Component{

constructor(props){
    super(props);
   this.state={
        idOP:this.props.op.idOP,
        idEvent:this.props.op.idEvent,
        listeAgents:[],
        url:this.props.op.url
    }
    
}


componentDidMount(){
    
    const formData = new FormData();
    formData.append("idEvent", this.state.idEvent);
    formData.append("idOP", this.state.idOP);
    axios.post(this.state.url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }
    
    ).then(
 
        (response)=>{
            this.setState({listeAgents: JSON.parse(JSON.stringify(response.data))})
        
            console.log(response)
        }   
    )
   .catch((error)=>{console.log(error)})  

}



render(){
    console.log(this.state.idEvent)
    return(
        <div style={{display:"flex",flexDirection:"column",marginBottom:10,width:100+"%"}}>
            <label style={{fontSize:28, color:"black",marginTop:10}}>Agents</label>
        <FlexContainer>
                  {
                (this.state.listeAgents.length>0)?(
             this.state.listeAgents.map((unAG,index)=>{ 
                 return(
                
                <AGCard key={index} ag={unAG} i={index} url={this.props.op.url} idEvent={this.state.idEvent}></AGCard>
                
            )
            })):(
                <p style={{fontSize:20, color:"black",marginTop:10}}>Aucun Agent trouvé</p>
            )
            }
        </FlexContainer>
        </div>
    )
}
}
export default ListeAgents

