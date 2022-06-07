import React, { Fragment } from "react";
import axios from "axios";
import { Button ,Modal,ModalContainer,Title,ClosedModalButton,ModalGestionContainer,ModalInfoContainer, ModalImage, ModalInfo, AvatarInput, Filtre} from "../AccueilAdminFAF/Styles/OrganismesStyle";

class Zones extends React.Component{
constructor(props){
    super(props);
    this.state={
        fonctions:[],
       modal:false
    }
}


componentDidMount(){
    axios.get(`http://localhost/FAF/getFonctions.php`).then(
 
             (response)=>{
                 this.setState({fonctions: JSON.parse(JSON.stringify(response.data))})
        
 console.log(response)
             }   
         )
        .catch((error)=>{console.log(error)})  

}

openModal(){
this.setState({
    modal:true
})
}
fermerModal(){
    this.setState({
        modal:false
    })
}

updateZones(index){
//console.log(document.getElementsByName(index+"zone1").id)
}



render(){
    return(
        <Fragment>
        <Button onClick={this.openModal.bind(this)}>Gestion des zones</Button>
        {this.state.modal && (
            <Modal>
            <ModalContainer id="Modal" >
                <Title>Gestion des zones</Title> 
                <ClosedModalButton onClick={this.fermerModal.bind(this)}></ClosedModalButton>
         
                <ModalInfoContainer style={{height:100+"%"}}>
                    <ModalImage style={{marginTop:0+"%",marginLeft:0+"%",paddingLeft:0+"%",width:55+"%"}}>
                       
                            <img src="assets/images/stade.jpg" alt="stade image" style={{width:500+"px",borderRadius:20+"%"}}></img>
                       
                    </ModalImage>
                    <ModalInfo style={{display:"grid"}}>
                    {this.state.fonctions.map((fct,index)=>{
                        console.log(fct)        
                            return(
                              <Filtre key={index}>
                                  <label style={{fontWeight:"bold",marginRight:15+"px"}}>{fct.nomFonction}</label>
                                  <Filtre  style={{display:"flex",flexWrap:"nowrap",width:100+"%"}}>
                                      {(this.state.fonctions[index]["zone1"]==1)?(
                                        <input type="checkbox"name={index+"zone1"} id="zone1"  defaultChecked />
                                      ):(
                                        <input type="checkbox" name={index+"zone1"} id="zone1"  />
                                      )
                                    }
                                  <label for="zone1">zone 1</label>   
                                  </Filtre>

                                  <Filtre  style={{display:"flex",flexWrap:"nowrap",width:100+"%"}}>
                                  {(this.state.fonctions[index]["zone2"]==1)?(
                                        <input type="checkbox" name={index+"zone2"} id="zone2"  defaultChecked />
                                      ):(
                                        <input type="checkbox" name={index+"zone2"} id="zone2"   />
                                      )
                                    }
                                  <label for="zone2">zone 2</label>   
                                  </Filtre>

                                  <Filtre  style={{display:"flex",flexWrap:"nowrap",width:100+"%"}}>
                                  {(this.state.fonctions[index]["zone3"]==1)?(
                                        <input type="checkbox" name={index+"zone3"} id="zone3"  defaultChecked />
                                      ):(
                                        <input type="checkbox" name={index+"zone3"} id="zone3"  />
                                      )
                                    }
                                  <label for="zone3">zone 3</label>   
                                  </Filtre>

                                  <Filtre  style={{display:"flex",flexWrap:"nowrap",width:100+"%"}}>
                                  {(this.state.fonctions[index]["zone4"]==1)?(
                                        <input type="checkbox" name={index+"zone4"} id="zone4"  defaultChecked />
                                      ):(
                                        <input type="checkbox" name={index+"zone4"} id="zone4"   />
                                      )
                                    }
                                  <label for="zone4">zone 4</label>   
                                  </Filtre>
                                   <span className="material-icons md-30" onClick={this.updateZones.bind(this)}   >edit</span> 

                              </Filtre>  
                                            )
                        })}

                    </ModalInfo>

                </ModalInfoContainer>
                
                <ModalGestionContainer >
                   
                
                   
                        
                     
                    
                </ModalGestionContainer>
               
            </ModalContainer>
            </Modal>
        )
        }

</Fragment>
        )
}


}
export default Zones;
