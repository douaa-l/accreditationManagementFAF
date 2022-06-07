import React, { Fragment } from 'react'
import { AvatarInput, FlexElementEvent, LogoEvent, Title ,ModalInfo,ModalImage,ModalInfoContainer,Modal,ModalContainer,ModalGestionContainer,Info,Button,ClosedModalButton,Filtre,InputFiltrage,SelectCateg, BackModalButton} from '../AccueilAdminFAF/Styles/OrganismesStyle';
import axios from 'axios';
import FileReader from "../AccueilAdminFAF/Components/FileReader" 
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from 'dateformat';
import OPContainer from '../AccueilAdminFAF/Components/OPContainer';
import ReactDOM from 'react-dom';
import ListeAgents from './ListeAgents';
import CheckCircle from '../AccueilAdminFAF/Styles/CheckCircle';
class OPEvent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            listeEvent:[],
            listeOP:[],
            idEvent:"",
            nomEvent:"",
            dateEvent:new Date(this.props.Ev.dateEvent),
            lieuEvent:"",
            dateLimiteDemande:new Date(this.props.Ev.dateLimiteDemande),
            equipeA:"",
            equipeB:"",
        	logoA:"",
            logoB:"",
        	typeEvent:"",
            openModal:false,
            modifierEvent:false,
            ctlError:"",
            selectedImageA:"",
            selectedImageB:"",
        vide:false,
        afficherDemandes:this.afficherDemandes.bind(this),
        demande:false,
        idOP:"",
        accredites:false,
        refus:false,
        traitement:true,
        afficherAccredites:this.afficherAccredites.bind(this),
        afficherRefus:this.afficherRefus.bind(this)
        }
        }

  
componentDidMount(){
   
    this.setState({
        idEvent:this.props.Ev.idEvenement,
        nomEvent:this.props.Ev.nomEvent,
        lieuEvent:this.props.Ev.lieuEvent,
        equipeA:this.props.Ev.equipeA,
        equipeB:this.props.Ev.equipeB,
        typeEvent:this.props.Ev.typeEvent,
        logoA:this.props.Ev.logoA,
        logoB:this.props.Ev.logoB

    })

    axios.get(`http://localhost/FAF/getOP.php`).then(
 
             (response)=>{
                 this.setState({listeOP: JSON.parse(JSON.stringify(response.data))})
                
             }   
         )
        .catch((error)=>{console.log(error)})  
}


afficherEvent(){
    this.setState({
        openModal:true
    })
}

fermerModal(){
    this.setState({
        openModal:false,
        modifierEvent:false,
        demande:false,
        accredites:false,
        traitement:false
    }
    )
    this.props.actualiser()

}
supprimer(){
    console.log(this.state.idEvent)
    const formData = new FormData();
    formData.append("id", this.state.idEvent);
    axios.post('supprimerEvent.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then(res=>console.log(res))

    document.getElementById("M1").removeChild(document.getElementById("M3"))
    var props={title:"l'evenement a été supprimé avec succés"}
    var el=React.createElement(CheckCircle,props)
    ReactDOM.render(el,document.getElementById("M2")) 
}
modifierEvent(){
    if(this.state.modifierEvent==false){
this.setState({modifierEvent:true})}else{
    this.setState({modifierEvent:false})
}
}
champsvide(){
    const nom=document.getElementById("nomNewEv").value
    const lieu=document.getElementById("lieuNewEv").value
   
    const equipeA=document.getElementById("equipeA").value
    const equipeB=document.getElementById("equipeB").value

    if((nom!=="") && (lieu!=="") && (equipeA!=="") && (equipeB!=="") ){
        this.setState({
            vide:false
        })
    }else{
        this.setState({
            vide:true
        })
    }
}

 controle(e){

    let error=""


        switch(e.target.id){
        case 'nomNewEv':
            {if(e.target.value.length<5){
                error="nom de l'evenement trop court"
            }else{
            for(var i=0; i<this.state.listeEvent.length; i++) {
            if(e.target.value === this.state.listeEvent[i].nomEvent) {
                error="cet evenement existe déja";
            }
            }
            }
            break;
            }
    
        case 'dateNewEv':{
           break;
        }
        default:{
            if(e.target.value.length<5){
                error="information dans un champs trop courte"
            }
        }

}
    



this.setState({
ctlError:error
})
console.log("err"+this.state.ctlError)
document.getElementById("errorPhrase").innerHTML=error
this.champsvide()
 }
 confirmerModif(){
     const id=this.state.idEvent
    const nom=document.getElementById("nomNewEv").value
    const lieu=document.getElementById("lieuNewEv").value
    const type=document.getElementById("typeNewEv").value
    const equipeA=document.getElementById("equipeA").value
    const equipeB=document.getElementById("equipeB").value
    const date=this.yyyymmdd(this.state.dateEvent) 
    const dateLimite= this.yyyymmdd(this.state.dateLimiteDemande) 
    const logoA=this.state.selectedImageA
    const logoB=this.state.selectedImageB
    const time=(this.hi(this.state.dateEvent))
    const timeLimite=(this.hi(this.state.dateLimiteDemande))

console.log(time)

    const formData = new FormData();
    formData.append("id",id)
    formData.append("nom", nom);
    formData.append("lieu", lieu);
    formData.append("type", type);
    formData.append("equipeA", equipeA);
    formData.append("equipeB", equipeB);
    formData.append("date", date);
    formData.append("dateLimite", dateLimite);
    formData.append("logoA",logoA);
    formData.append("logoB",logoB);
    formData.append("time",time);
    formData.append("timeLimite",timeLimite);

    axios.post('modifEvent.php', formData
    , {
    headers: {
        }   
    }
    ).then(res=>console.log(res))

    document.getElementById("M1").removeChild(document.getElementById("M3"))
var props={title:"l'evenement a été modifié avec succés"}
var el=React.createElement(CheckCircle,props)
ReactDOM.render(el,document.getElementById("M2")) 
 }
 yyyymmdd = function(date) {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
   
    return [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd,
            
           ].join('-');
  };
  hi=function(date){
       var hh=date.getHours();
    var ii=date.getMinutes();
    return[
        (hh>9 ? '' : '0') + hh,
            (ii>9 ? '' : '0') + ii,
            "00"
    ].join(":");
  }

controleDate(date){
    this.setState({
        dateEvent:date
    })
  
}
controleDateLimite(date){
    this.setState({
        dateLimiteDemande:date
    })
}
accredites(){
this.setState({
    accredites:true,
    refus:false,
        traitement:false
},()=>{
   var el=React.createElement(OPContainer,this.state )
ReactDOM.render(el,document.getElementById("c1")) 
})

}

afficherAccredites(idOP){
    const idEvent=this.state.idEvent
    var props={op:{idOP:idOP,idEvent:idEvent,url:"/getAccredites.php"}}
   const el=React.createElement(ListeAgents,props);
     ReactDOM.render(el,document.getElementById("c1"))
}
demande(){
 this.setState({
        demande:true,
        refus:false,
        traitement:true
    },()=>{
       var el=React.createElement(OPContainer,this.state)
ReactDOM.render(el,document.getElementById("c1")) 
    })


}
refus(){
    this.setState({
        refus:true,
        traitement:false
    },()=>{
        var el=React.createElement(OPContainer,this.state)
 ReactDOM.render(el,document.getElementById("c1")) 
     })
}
traitement(){
    console.log("traitement")
    this.setState({
        refus:false,
        traitement:true
    },()=>{
        var el=React.createElement(OPContainer,this.state)
 ReactDOM.render(el,document.getElementById("c1")) 
     }) 
}

afficherRefus(idOP){
    const idEvent=this.state.idEvent
   var props={op:{idOP:idOP,idEvent:idEvent,url:"getRefus.php"}}
  const el=React.createElement(ListeAgents,props);
    
    ReactDOM.render(el,document.getElementById("c1"))
}

afficherDemandes(idOP){
  
const idEvent=this.state.idEvent
   var props={op:{idOP:idOP,idEvent:idEvent,url:"getDemandes.php"}}
  const el=React.createElement(ListeAgents,props);
    
    ReactDOM.render(el,document.getElementById("c1"))

}

back(){
    this.setState({
        demande:false,
        refus:false,
        traitement:false
    })

}
backAc(){
    this.setState({
        accredites:false,
        refus:false,
        traitement:false
    })
}

render(){ 
    return(

     
           
         <Fragment>
           <FlexElementEvent onClick={this.afficherEvent.bind(this)}>
               
            
                <table>
                    <tbody>
                    <tr><td>
                        <LogoEvent >
                            <img src={this.state.logoA}></img>
                        </LogoEvent>
                        
                        </td>
                        <td>
                             
                                
                                <p  className="InfoEvent">{this.state.nomEvent}<br/>
                                {dateFormat(this.state.dateEvent, " d/mm/yyyy h:MM TT")}</p>
                             <label style={{color:"#400106" ,fontSize:12+"px"}}>   {dateFormat(this.state.dateLimiteDemande, " d/mm/yyyy h:MM TT") }</label>
                                
                             
                        </td>
                        <td>
                        <LogoEvent >
                            <img src={this.state.logoB}></img>
                        </LogoEvent>
                        
                        </td>
                      
                    </tr>
                    </tbody>
                </table>
                
            </FlexElementEvent>

            {this.state.openModal && !this.state.modifierEvent &&(
               <Modal>
                <ModalContainer id="M1" > 
                <ClosedModalButton onClick={this.fermerModal.bind(this)}></ClosedModalButton>
                   
                    <Title>Fiche Evenement</Title> 
                   { this.state.demande && 
                   <Fragment>
          <label style={{color:"#400106" ,fontWeight:"bold",fontSize:20+"px",marginBottom:15+"px"}}>Demandes</label>

                       <table>
                        <tbody>   
                            {(this.state.traitement)?(
                                    <tr style={{fontWeight:"bold",cursor:"pointer"}}>
                             
                                <td  style={{width:50+"%", color:"#57b846"}} onClick={this.traitement.bind(this)}>en cours de traitement</td>
                                <td onClick={this.refus.bind(this)}>refusées</td>
                            
                            </tr> 
                                ):(
                                    <tr style={{fontWeight:"bold",cursor:"pointer"}}>
                             
                                <td  style={{width:50+"%"}} onClick={this.traitement.bind(this)}>en cours de traitement</td>
                                <td style={{width:50+"%", color:"#57b846"}} onClick={this.refus.bind(this)}>refusées</td>
                            
                            </tr>    
                                )
                                
                                }
                           
                        </tbody>
                    </table>
                   <BackModalButton onClick={this.back.bind(this)}/>

                   <ModalInfoContainer id="c1" >
                    
                   </ModalInfoContainer>
                 </Fragment>
                   }
                    { this.state.accredites && 
                   <Fragment>
                   <BackModalButton onClick={this.backAc.bind(this)}/>
                   <label style={{color:"#400106" ,fontWeight:"bold",fontSize:20+"px",marginBottom:15+"px"}}>Accredités</label>
                   <ModalInfoContainer id="c1" >
                   </ModalInfoContainer>
                 </Fragment>
                   }

                    {(!this.state.demande && !this.state.accredites) && 
                    <Fragment>
                   
                    <table>
                        <tbody>
                            <tr style={{fontWeight:"bold",cursor:"pointer"}}>
                                <td onClick={this.demande.bind(this)}>demandes</td>
                                <td onClick={this.accredites.bind(this)}>accrédités</td>
                            
                            </tr>
                        </tbody>
                    </table>
                    <ModalInfoContainer id="M2" >
                   
                   <Fragment>
                   <ModalImage >
                       <Title style={{color:"#400106"}}>{this.state.equipeA}</Title>
                       <AvatarInput style={{display:"grid",marginLeft:30+"px"}}>
                           <img src={this.state.logoA} alt ="" style={{position:'absolute'}}></img>
                       </AvatarInput>
                       

                   </ModalImage>
                   <ModalInfo >
                        
                       <Info>Nom : {this.state.nomEvent}</Info>
                       <Info>Type : {this.state.typeEvent}</Info>
                       <Info>Lieu : {this.state.lieuEvent}</Info>
                       <Info>Date : {dateFormat(this.state.dateEvent, " d/mm/yyyy h:MM TT")}</Info>
                       <Info style={{color:"#400106"}}>Date Limite de Demandes : {dateFormat(this.state.dateLimiteDemande, " d/mm/yyyy h:MM TT")}</Info>
               
                   </ModalInfo>
                   <ModalImage  >
                      <Title style={{color:"#400106"}}>{this.state.equipeB}</Title>
                       <AvatarInput style={{display:"grid",marginLeft:30+"px"}}>
                           <img src={this.state.logoB} alt ="" style={{position:'absolute'}}></img>
                       </AvatarInput>
                       
                   </ModalImage>
                   </Fragment>
               
               </ModalInfoContainer>
               <ModalGestionContainer id="M3">
               
                   <Button onClick={this.modifierEvent.bind(this)} >Modifier</Button>
                   <Button onClick={this.supprimer.bind(this)} >Supprimer</Button>
             
                   
               </ModalGestionContainer>

                    </Fragment>
                   }
                  
                </ModalContainer>
               </Modal>
            )
            }

            {this.state.openModal && this.state.modifierEvent &&(
            <Modal>
            <ModalContainer id="M1">
                <Title>Modifier un Evenement</Title> 
<ClosedModalButton onClick={this.fermerModal.bind(this)}></ClosedModalButton>
                <ModalInfoContainer id="M2">
                    
                    <ModalImage style={{paddingLeft:0+"px",paddingRight:0+"px",display:"grid"}}>
                        <Title>Equipe A</Title>
                        <Filtre>
                        <label>nom</label>
                            <InputFiltrage id="equipeA" onChange={this.controle.bind(this)} defaultValue={this.state.equipeA}></InputFiltrage>
                        </Filtre>
                        <FileReader img={this.state.logoA} newImage={(url)=>this.setState({selectedImageA:url})}/>
                    </ModalImage>
                    <ModalInfo>
                        <Filtre style={{display:"grid"}}>
                        <label>Titre Evenement</label>
                            <InputFiltrage id="nomNewEv" onChange={this.controle.bind(this)} defaultValue={this.state.nomEvent}></InputFiltrage>
                        </Filtre>
                        <Filtre style={{display:"grid"}}>
                        <label>Lieu Evenement</label>
                            <InputFiltrage id="lieuNewEv" onChange={this.controle.bind(this)} defaultValue={this.state.lieuEvent}></InputFiltrage>
                        </Filtre> 
                        <Filtre style={{display:"grid"}}>
                            <label>Type Evenement</label>
                            <SelectCateg id="typeNewEv" onChange={this.controle.bind(this)} defaultValue={this.state.typeEvent}>
                            <option>Match</option>
                            <option>Conférence de presse</option>
                            </SelectCateg>
                            </Filtre> 
                            
                            <Filtre style={{display:"contents"}}>
                            <label>Date de l'événement</label>
                        <DatePicker className="datepicker"
                                        id="dateNewEv"
                                        selected={this.state.dateEvent}
                                        onChange={this.controleDate.bind(this)}
                                        dateFormat="dd/MM/yyyy h:mm aa"
                                        showTimeSelect
                            />
                            </Filtre> 
                            <Filtre style={{display:"contents"}}>
                            <label>Date limite de demandes</label>
                            <DatePicker className="datepicker"
                                        id="dateLimiteNewEv"
                                        selected={this.state.dateLimiteDemande}
                                        onChange={this.controleDateLimite.bind(this)}
                                        dateFormat="dd/MM/yyyy h:mm aa"
                                        showTimeSelect
                            />   
                            </Filtre> 

                    </ModalInfo>
                    <ModalImage style={{display:"grid"}}>
                        <Title>Equipe B</Title>
                        <Filtre>
                        <label>nom</label>
                            <InputFiltrage id="equipeB" onChange={this.controle.bind(this)} defaultValue={this.state.equipeB}></InputFiltrage>
                        </Filtre>
                        <FileReader img={this.state.logoB} newImage={(url)=>this.setState({selectedImageB:url})}/>
                    </ModalImage>
                </ModalInfoContainer>
                <label id="errorPhrase" style={{marginTop:5+"px",color:"red",fontStyle:"italic",fontSize:12+"px"}}></label>
                
                <ModalGestionContainer id="M3">
                    
                    
                {(this.state.vide || this.state.ctlError!==""  )?(
                    <Button  disabled={true}  >Modifier</Button> 
                        
                    ):(
                    <Button onClick={this.confirmerModif.bind(this) } >Modifier</Button>
                    )
                    }
                    <Button onClick={this.modifierEvent.bind(this)} >Annuler</Button>
                    
                </ModalGestionContainer>
            </ModalContainer>
            </Modal>

            )}
            
          </Fragment>
    );
}
   


}
export default OPEvent;