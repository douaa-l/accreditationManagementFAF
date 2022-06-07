import React from "react";
import axios from "axios";


class AccepterRefuser extends React.Component{

constructor(props){
    super(props);
    this.state={
        idEvent:props.idEvent,
        matricule:props.matricule
    }
}

componentDidMount(){
    console.log(this.props)
}

accepter(){
    const formData = new FormData();
    formData.append("idEvent", this.state.idEvent);
    formData.append("matricule", this.state.matricule);
    axios.post("accrediter.php", formData, {
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
refuser(){
    const formData = new FormData();
    formData.append("idEvent", this.state.idEvent);
    formData.append("matricule", this.state.matricule);
    axios.post("refuser.php", formData, {
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
return(
    <div style={{display:"flex",flexWrap:"nowrap"}}>
        <span class="material-icons md-30" onClick={this.accepter.bind(this)}>check_circle</span>
        <span class="material-icons md-31" onClick={this.refuser.bind(this)}>cancel</span>
    </div>
)
}}
export default AccepterRefuser;