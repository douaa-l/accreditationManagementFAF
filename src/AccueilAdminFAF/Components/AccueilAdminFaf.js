import React, { Fragment, } from 'react';
import axios from 'axios';
import '../../App.css';
import { GestionOP ,Filtre,InputFiltrage,SelectCateg,Button,FiltrageBox,NouveauOP,Modal,ModalInfo,ModalImage,ModalContainer,ModalInfoContainer,ClosedModalButton,Title,ModalGestionContainer} from "../Styles/OrganismesStyle"
import CheckCircle from '../Styles/CheckCircle';
import OPContainer from "./OPContainer"
import {Container}from "../Styles/OrganismesStyle"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import FileReader from './FileReader';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';



class AccueilAdminFaf extends React.Component{

    constructor(props){
        super(props);
        this.state={
            listeOP:[
              ],
            filtredListe:[],
            openModal:false,
            selectedDate: new Date(),
            ctlError:"",
            vide:true,
            selectedImage:"",
            update:false
    }}

    actualiser(){
        this.componentDidMount()
        console.log("actualiser")
    }
     sendEmail = (e) => {
        console.log(e.target)
        let templateParams = {
            name: document.getElementById("nomNewOP").value,
            email: document.getElementById("emailNewOP").value}
    
        emailjs.send('service_11c7s78', 'template_rmr09o3', templateParams, 'user_dNpfNuDWh1PDUgYS5Hyhh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    afficherFicheOP(){
   
        this.setState({
            openModal:true
        })
      
      }

    componentDidMount(){
console.log("mount")
        axios.get(`http://localhost/FAF/getOP.php`).then(
 
             (response)=>{
                 this.setState({listeOP: JSON.parse(JSON.stringify(response.data))})
                this.setState({filtredListe:this.state.listeOP})
 console.log(response)
             }   
         )
        .catch((error)=>{console.log(error)})  
 
     }
    
   

     fermerModal(){
        this.setState({
            openModal:false
        })
       
    }

     ajouterOPModal(){
        console.log(this.state)  
      
        this.setState({
            openModal:true
        })
}

ajouterOP(e){
    e.preventDefault();

const nom=document.getElementById("nomNewOP").value
const email=document.getElementById("emailNewOP").value
const statut=document.getElementById("statutNewOP").value
const siege=document.getElementById("siegeNewOP").value
const categ=document.getElementById("categNewOP").value
const date= this.yyyymmdd(this.state.selectedDate)
const logo=this.state.selectedImage


const formData = new FormData();
formData.append("nom", nom);
formData.append("email", email);
formData.append("statut", statut);
formData.append("siege", siege);
formData.append("categ", categ);
formData.append("date", date);
formData.append("logo",logo);

axios.post('newOP.php', formData
 , {
   headers: {
    }   
}
).then(res=>{console.log(res)
this.componentDidMount()
})


document.getElementById("Modal").removeChild(document.getElementById("newOPGContainer"))
var props={title:"l'organisme a été ajouté avec succés"}
var el=React.createElement(CheckCircle,props)
   
ReactDOM.render(el,document.getElementById("newOPModal")) 

var templateParams = {
    nom: nom,
    email: email
  };

emailjs.send('service_11c7s78', 'template_rmr09o3', templateParams, 'user_dNpfNuDWh1PDUgYS5Hyhh')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});


}
   
 intersection(arr1, arr2) {
    return arr1.filter(elem => arr2.includes(elem));
  }
    filtrer(){
        this.setState({
            filtredListe:[]
        })


    const liste1=this.filtrerNom(document.getElementById("filtreNom").value)
    const liste2=this.filtrerCateg(document.getElementById("filtreCateg").value)
console.log(liste1)
console.log(liste2)
var l=[]

    l=this.intersection(liste1,liste2)
    console.log("l="+l[0])

    this.setState({
    
        filtredListe:l
      

    },()=>{
        const props={listeOP:this.state.filtredListe, afficherFicheOP:this.afficherFicheOP}
        var el=React.createElement(OPContainer,props)
     ReactDOM.render(el,document.getElementById("contenaireOP")) }) 

    
    }
    filtrerCateg(searchedCateg){
        const listecateg=[]
        console.log(searchedCateg)
    
         this.state.listeOP.filter((val)=>{
          if(searchedCateg === "tout"){
                 
                listecateg.push(val)
            }else if(val.categOP.toLowerCase().includes(searchedCateg.toLowerCase())){
                   
                    listecateg.push(val)
            }
            return(listecateg)
        }) 

      return(listecateg)
    }

    filtrerNom(searchedName){
        const listeNom=[]
      console.log(searchedName)
       
         this.state.listeOP.filter((val)=>{
          if(searchedName === ""){
                  
                listeNom.push(val)
            }else if(val.nomOP.toLowerCase().includes(searchedName.toLowerCase())){
                   
                    listeNom.push(val)
            }
            return(listeNom)
        }) 
  
        return(listeNom)
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

    controle(e){ 
        
        let error=""
    
            switch(e.target.id){
            case 'nomNewOP':
                {if(e.target.value.length<5){
                    error="nom de l'organisme trop court"
                }else{
                for(var i=0; i<this.state.listeOP.length; i++) {
                if(e.target.value === this.state.listeOP[i].nomOP) {
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
                        if(e.target.value === this.state.listeOP[i].email) {
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
yyyymmdd = function(date) {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
  
    return [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('/');
  };
  controleDate(date){
    this.setState({
        selectedDate:date
    })

}
 

     render(){
         return(

          <Fragment>  
               
                <Container>  
                     

                        <GestionOP >
                            <NouveauOP>
                                <span class="material-icons md-48" onClick={this.ajouterOPModal.bind(this)} >add_circle</span>
                                <label style={{fontSize:25}}>Nouveau</label>
                            </NouveauOP>

                            <FiltrageBox>
                            <label style={{fontWeight:"bold",justifyContent:"center",color:"#57b846",fontSize:"x-large",marginBottom:50,marginTop:5}}>Filtrage</label>
                                <Filtre >
                                    <label>nom</label>
                                    <InputFiltrage id="filtreNom" type="text" ></InputFiltrage>
                                </Filtre>
                                <Filtre >
                                    <label>categorie</label>
                                    <SelectCateg id="filtreCateg" name="categorie" >
                                        <option>tout</option>
                                        <option>TV</option>
                                        <option>Presse écrite</option>
                                        <option>Presse web</option>
                                    </SelectCateg>
                                </Filtre>
                                <Button onClick={this.filtrer.bind(this)}>Filtrer</Button>
                            </FiltrageBox>
                         </GestionOP>
                                        {this.state.openModal && (
                        <Modal>
                        <ModalContainer id="Modal" >
                            <Title>Ajouter un Organisme</Title> 
                            <ClosedModalButton onClick={this.fermerModal.bind(this)}></ClosedModalButton>
                     
                            <ModalInfoContainer id="newOPModal">

                                <ModalImage >
                                            <FileReader img="assets/images/LogoFaf.png" newImage={(url)=>this.setState({selectedImage:url})}/>
                                </ModalImage>
                                <ModalInfo>
                                    
                                   
                                        <Filtre>
                                        <label>Nom</label>
                                        <InputFiltrage id="nomNewOP" name="nom" onChange={this.controle.bind(this)}></InputFiltrage>
                                         </Filtre> 

                                         <Filtre>
                                        <label>Email</label>
                                        <InputFiltrage id="emailNewOP" name="email" onChange={this.controle.bind(this)}></InputFiltrage>
                                         </Filtre> 

                                         <Filtre>
                                        <label>Siege Social</label>
                                        <InputFiltrage id="siegeNewOP" onChange={this.controle.bind(this)}></InputFiltrage>
                                         </Filtre> 

                                         <Filtre>
                                        <label>Statut</label>
                                        <InputFiltrage id="statutNewOP" onChange={this.controle.bind(this)}></InputFiltrage>
                                         </Filtre>

                                         <Filtre>
                                        <label>Categorie</label>
                                        <SelectCateg id="categNewOP" onChange={this.controle.bind(this)}>
                                        <option>TV</option>
                                        <option>Presse écrite</option>
                                        <option>Presse web</option>
                                        </SelectCateg>
                                         </Filtre> 
                                         
                                        <Filtre>
                                        <label>Date de Creation</label>
                                         <DatePicker className="datepicker"
                                                    id="dateCreationNewOP"
                                                    selected={this.state.selectedDate}
                                                    onChange={this.controleDate.bind(this)}
                                                    dateFormat="dd/MM/yyyy"
                                                   
                                         />
                                        </Filtre> 
                                  
                                </ModalInfo>
                            </ModalInfoContainer>
                            <label id="errorPhrase" style={{marginTop:5+"px",color:"red",fontStyle:"italic",fontSize:12+"px"}}></label>
                            
                            <ModalGestionContainer id="newOPGContainer">
                               
                                
                           {(this.state.vide || this.state.ctlError!==""  )?(
                                <Button  disabled={true}  >Ajouter</Button> 
                                    
                                  ):(
                                  <Button type="submit" value="send" onClick={this.ajouterOP.bind(this) } >Ajouter</Button>
                                  )
                                  }
                                
                            </ModalGestionContainer>
                           
                        </ModalContainer>
                        </Modal>
                    )
                    }



                    <OPContainer actualiser={this.actualiser.bind(this)} listeOP={this.state.filtredListe} afficherFicheOP={this.afficherFicheOP} />
           
                 </Container>
                 </Fragment>             
                
         )
     }

}
export default AccueilAdminFaf;

