import React, { Fragment } from 'react'
import {Button,Filtre,InputFiltrage,SelectCateg, ClosedModalButton, FlexElement, ImageBox, Info, InfoBox, Modal, ModalContainer, ModalGestionContainer, ModalImage, ModalInfo, ModalInfoContainer, Title} from '../Styles/OrganismesStyle'
import axios from 'axios';
import { AvatarInput } from '../Styles/OrganismesStyle';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import FileReader from './FileReader';
import '../../App.css';
import CheckCircle from '../Styles/CheckCircle';
import  ReactDOM  from 'react-dom';
import dateFormat from 'dateformat';

class OPCard extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
           index:0,
        listeOP:[],
        idOP:"",
        nomOP:"",
        imageOp:"",
        categOP:"",
        emailOP:"",
        statutOP:"",
        logoOP:"",
        dateCreationOP:new Date(this.props.op.dateCreation),
        siegeSocialOP:"",
        etatBlocageOP:0,
        openModal:false,
        modifierOP:false,
        ctlError:"",
        vide:false,
        selectedImage:"",
        act:false
        
        }
        }

  
componentDidMount(){
    console.log("refus:"+this.props.refus)
    console.log("trait:"+this.props.traitement)
    console.log("ac:"+this.props.accredites)
    this.setState({
        idOP:this.props.op.idOp,
        nomOP:this.props.op.nomOP,
        imageOp:this.props.op.imageOP,
        categOP:this.props.op.categOP,
        emailOP:this.props.op.email,
        
        siegeSocialOP:this.props.op.siegeSocial,
        etatBlocageOP:this.props.op.etatBlocage,
        statutOP:this.props.op.statut,
        logoOP:this.props.op.logoOP,
        index:this.props.i,
        listeOP:this.props.list,
        selectedImage:this.props.op.logoOP
        
    })
   
}

afficherFicheOP(){

    (this.props.refus)?(
       this.props.afficherRefus(this.state.idOP)
   ):(
   (this.props.traitement)?(
       this.props.afficherDemandes(this.state.idOP)
   ):(
      (this.props.accredites)?(
          this.props.afficherAccredites(this.state.idOP)
      ):(
          
    this.setState({
      openModal:true
  })
)) )
 
}

fermerModal(){
    this.setState({
        openModal:false,
        modifierOP:false
    })
this.props.actualiser()
}

Bloquer(){
 
    const formData = new FormData();
formData.append("etat", this.state.etatBlocageOP);
formData.append("id", this.state.idOP);
axios.post('bloquer.php', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
}).then(res=>console.log(res))

if(this.state.etatBlocageOP==0){
this.setState({
    etatBlocageOP:1
})
}else{
    this.setState({
        etatBlocageOP:0
    })
}


}


supprimer(){
    console.log(this.state.idOP)
    const formData = new FormData();
    formData.append("id", this.state.idOP);
    axios.post('supprimer.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then(res=>console.log(res))
 
    document.getElementById("M1").removeChild(document.getElementById("M3"))
var props={title:"l'organisme a été supprimé avec succés"}
var el=React.createElement(CheckCircle,props)
ReactDOM.render(el,document.getElementById("M2")) 



}

modifierOP(){
    if(this.state.modifierOP==false){
this.setState({modifierOP:true})}else{
    this.setState({modifierOP:false})
}
}

controle(e){ 
        
    let error=""

console.log(e.target.id)
        switch(e.target.id){
        case 'nomNewOP':
            {if(e.target.value.length<5){
                error="nom de l'organisme trop court"
            }else{
            for(var i=0; i<this.state.listeOP.length; i++) {
            if(e.target.value === this.state.listeOP[i].nomOP && this.state.idOP!==this.state.listeOP[i]["idOp"]) {
                error="cet organisme existe déja";
            }
            }
            }
            break;
            }
        case 'emailNewOP':{
                if((!(e.target.value.includes("@"))) || (((!(e.target.value.includes(".com")))) && ((!(e.target.value.includes(".dz")))))  ){
                    error="email erroné"
                }else {
                    for(var i=0; i<this.state.listeOP.length; i++) {
                        if(e.target.value === this.state.listeOP[i].email   && this.state.idOP!==this.state.listeOP[i]["idOp"]) {
                            error="cet email existe déja";
                        }
                }}
                break;
        }
        case 'dateCreationNewOP':{
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

champsvide(){
    const nom=document.getElementById("nomNewOP").value
    const email=document.getElementById("emailNewOP").value
    const statut=document.getElementById("statutNewOP").value
    const siege=document.getElementById("siegeNewOP").value

    if((nom!=="") && (email!=="") && (statut!=="") && (siege!=="") ){
        this.setState({
            vide:false
        })
    }else{
        this.setState({
            vide:true
        })
    }
}
yyyymmdd = function(date) {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
   
    return [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd,
            
           ].join('-');
  };
confirmerModif(){

    const nom=document.getElementById("nomNewOP").value
    const email=document.getElementById("emailNewOP").value
    const statut=document.getElementById("statutNewOP").value
    const siege=document.getElementById("siegeNewOP").value
    const categ=document.getElementById("categNewOP").value
    const date=this.yyyymmdd(this.state.dateCreationOP)
    const logo=this.state.selectedImage
    const id=this.state.idOP
    
    const formData = new FormData();
    formData.append("id",id);
    formData.append("nom", nom);
    formData.append("email", email);
    formData.append("statut", statut);
    formData.append("siege", siege);
    formData.append("categ", categ);
    formData.append("date", date);
    formData.append("logo",logo);
    
    axios.post('majOP.php', formData
     , {
       headers: {
        }   
    }
    ).then(res=>{console.log(res)
        this.props.actualiser()
    })

    document.getElementById("M1").removeChild(document.getElementById("M3"))
    var props={title:"l'organisme a été modifié avec succés"}
    var el=React.createElement(CheckCircle,props)
    ReactDOM.render(el,document.getElementById("M2")) 
    this.setState({
        act:true
    })

}

controleDate(date){
    this.setState({
        dateCreationOP:date
    })
  
}

render(){ 
  
    return(
           
         <Fragment>
           <FlexElement onClick={this.afficherFicheOP.bind(this)}>
               <ImageBox>
               <img src={this.state.logoOP} alt="logoFAF" class="navbar-brand navbar-logo" href="#" style={{height:100,width:150}}></img>
               </ImageBox>
              <InfoBox>
                <label>{this.state.nomOP}</label>
                <label style={{fontSize:"small",fontWeight:"initial"}}>{this.state.categOP}</label>
                </InfoBox>
                
            </FlexElement>
            {this.state.openModal && !this.state.modifierOP &&(
               <Modal >
                <ModalContainer id="M1">
                    <Title>Fiche Organisme</Title>  
                    <ClosedModalButton onClick={this.fermerModal.bind(this)}></ClosedModalButton>
                    <ModalInfoContainer id="M2">
                   

                        <ModalImage >
                            <AvatarInput>
                                <img src={this.state.logoOP} alt ="" style={{position:'absolute'}}></img>
                            </AvatarInput>
                           
                        </ModalImage>
                        <ModalInfo>
                             
                            <Info>id : {this.state.idOP}</Info>
                            <Info>Nom : {this.state.nomOP}</Info>
                            <Info>Categorie : {this.state.categOP}</Info>
                            <Info>Siege social : {this.state.siegeSocialOP}</Info>
                            <Info>Email : {this.state.emailOP}</Info>
                            <Info>Statut : {this.state.statutOP}</Info>
                            <Info>Date de creation : {dateFormat(this.state.dateCreationOP,"dd/mm/yyyy")}</Info>
                        </ModalInfo>
                    </ModalInfoContainer>
                    <ModalGestionContainer id="M3">
                    
                        <Button onClick={this.modifierOP.bind(this)} >Modifier</Button>
                        <Button onClick={this.supprimer.bind(this)} >Supprimer</Button>
                        {(this.state.etatBlocageOP==1)?
                           ( <Button onClick={this.Bloquer.bind(this)} color={"red"}>Bloquer</Button>)
                        :(<Button onClick={this.Bloquer.bind(this)} color={"green"}>Debloquer</Button>)
                    }
                        
                    </ModalGestionContainer>
                </ModalContainer>
               </Modal>
            )
            }


{this.state.openModal && this.state.modifierOP &&(
               <Modal >
                <ModalContainer id="M1">
                <Title>Modifier un Organisme</Title>
                 <ClosedModalButton onClick={this.fermerModal.bind(this)}></ClosedModalButton>

                    <ModalInfoContainer id="M2">
                   
                    <ModalImage id="modalImageModif" >
                                            <FileReader img={this.state.logoOP} newImage={(url)=>this.setState({selectedImage:url})}/>
                                </ModalImage>
                                <ModalInfo id="modalInfoModif">
                                    
                                    
                                        <Filtre>
                                        <label>Nom</label>
                                        <InputFiltrage id="nomNewOP" onChange={this.controle.bind(this)} defaultValue={this.state.nomOP}></InputFiltrage>
                                         </Filtre> 

                                         <Filtre>
                                        <label>Email</label>
                                        <InputFiltrage id="emailNewOP" onChange={this.controle.bind(this)} defaultValue={this.state.emailOP}></InputFiltrage>
                                         </Filtre> 

                                         <Filtre>
                                        <label>Siege Social</label>
                                        <InputFiltrage id="siegeNewOP" onChange={this.controle.bind(this)} defaultValue={this.state.siegeSocialOP}></InputFiltrage>
                                         </Filtre> 

                                         <Filtre>
                                        <label>Statut</label>
                                        <InputFiltrage id="statutNewOP" onChange={this.controle.bind(this)} defaultValue={this.state.statutOP}></InputFiltrage>
                                         </Filtre>

                                         <Filtre>
                                        <label>Categorie</label>
                                        <SelectCateg id="categNewOP" onChange={this.controle.bind(this)} defaultValue={this.state.categOP}>
                                        <option>TV</option>
                                        <option>Presse écrite</option>
                                        <option>Presse web</option>
                                        </SelectCateg>
                                         </Filtre> 
                                         
                                        <Filtre style={{display:"grid"}}>
                                        <label>Date de Creation</label>
                                         <DatePicker className="datepicker"
                                                    id="dateCreationNewOP"
                                                    selected={this.state.dateCreationOP}
                                                    onChange={this.controleDate.bind(this)}
                                                    defaultValue={this.state.dateCreationOP}
                                                    dateFormat="dd/MM/yyyy"
                                         />
                                        </Filtre> 
                                  
                                </ModalInfo>
                            </ModalInfoContainer>
                            <label id="errorPhrase" style={{marginTop:5+"px",color:"red",fontStyle:"italic",fontSize:12+"px"}}></label>
                            
                    <ModalGestionContainer id="M3">
                    {(this.state.vide || this.state.ctlError!==""  )?(
                        <Button disabled={true} >Modifier</Button>
                    ):(<Button onClick={this.confirmerModif.bind(this)} >Modifier</Button>

                    )}
                        
                        <Button onClick={this.modifierOP.bind(this)} >Annuler</Button>
                       
                        
                    </ModalGestionContainer>
                </ModalContainer>
               </Modal>
            )
            }
          </Fragment>
    );
}
   


}
export default OPCard;