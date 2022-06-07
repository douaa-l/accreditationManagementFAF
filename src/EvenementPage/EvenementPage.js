import React, { Fragment } from "react"
import { GestionOP,Container,Filtre,InputFiltrage,SelectCateg,Button,FiltrageBox,NouveauOP,Modal,ModalInfo,ModalImage,ModalContainer,ModalInfoContainer,ClosedModalButton,Title,ModalGestionContainer } from "../AccueilAdminFAF/Styles/OrganismesStyle"
import EventContainer from "./EventContainer";
import FileReader from "../AccueilAdminFAF/Components/FileReader";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import CheckCircle from "../AccueilAdminFAF/Styles/CheckCircle";
import  ReactDOM  from "react-dom";
class EvenementPage extends React.Component{

            constructor(props){
                super(props);
                this.state={
                    listeEvent:[],
                    filtredListe:[],
                    openModal:false,
                    selectedImageA:"",
                    selectedImageB:"",
                    selectedDate:(new Date()),
                    selectedDateLimite:new Date(),
                    ctlError:"",
                    vide:true
            }}
        
            actualiser(){
                this.componentDidMount()
                console.log("actualiser")
            }
        
            componentDidMount(){
        
                axios.get(`http://localhost/FAF/getEvent.php`).then(
         
                     (response)=>{
                        
                         console.log(response)
                         console.log(JSON.parse(JSON.stringify(response.data)))
                         this.setState({listeEvent:JSON.parse(JSON.stringify(response.data))})
                         this.setState({filtredListe:JSON.parse(JSON.stringify(response.data))})
                    
                     }   
                 )
                .catch((error)=>{console.log(error)})  
         
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
                        if(e.target.value.length<3){
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

        
             fermerModal(){
                this.setState({
                    openModal:false
                })
            }
           
            filtrer(){
                this.setState({
                    filtredListe:[]
                })
        
            const liste1=this.filtrerNom(document.getElementById("filtreNom").value)
            const liste2=this.filtrerCateg(document.getElementById("filtreCateg").value)
        console.log(liste1)
        console.log(liste2)
        const l=[]
          liste1.forEach(element => {
                
                for(let i=0;i<liste2.length;i++){
                if (element.idEvenement===liste2[i].idEvenement){
                    l.push(element)
                }
            }
            
            });
            console.log("l="+l)
        
            this.setState({
              /* filtredListe:liste1.filter(value=>liste2.includes(value))
               filtredListe:liste1.filter(function(n) { return liste2.indexOf(n) !== -1;})*/
                filtredListe:l
              
        
            }) 
            console.log(this.state.filtredListe)
            
            }
            filtrerCateg(searchedCateg){
                const listecateg=[]
                console.log(searchedCateg)
            
                 this.state.listeEvent.filter((val)=>{
                  if(searchedCateg === "Match"){
                         
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
               
                 this.state.listeEvent.filter((val)=>{
                  if(searchedName === ""){
                          
                        listeNom.push(val)
                    }else if(val.nomOP.toLowerCase().includes(searchedName.toLowerCase())){
                           
                            listeNom.push(val)
                    }
                    return(listeNom)
                }) 
          
                return(listeNom)
            }
            ajouterEventModal(){

                
        this.setState({
            openModal:true
        })
            }
            ajouterEvent(){

                
               
                const nom=document.getElementById("nomNewEv").value
                const lieu=document.getElementById("lieuNewEv").value
                const type=document.getElementById("typeNewEv").value
                const equipeA=document.getElementById("equipeA").value
                const equipeB=document.getElementById("equipeB").value
                const date=this.yyyymmdd(this.state.selectedDate) 
                const dateLimite= this.yyyymmdd(this.state.selectedDateLimite) 
                const logoA=this.state.selectedImageA
                const logoB=this.state.selectedImageB
                const time=(this.hi(this.state.selectedDate))
                const timeLimite=(this.hi(this.state.selectedDateLimite))

                const formData = new FormData();
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

                axios.post('newEvent.php', formData
                , {
                headers: {
                    }   
                }
                ).then(res=>{console.log(res)
                    this.componentDidMount()
                })

                document.getElementById("M1").removeChild(document.getElementById("M3"))
var props={title:"l'evenement a été ajouté avec succés"}
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
                    selectedDate:date
                })
              
            }
            controleDateLimite(date){
                this.setState({
                    selectedDateLimite:date
                })
            }
        
             render(){
                
                 return(
        
            <Fragment>
                      
                        
                        <Container>  
                             
        
                                <GestionOP>
                                    <NouveauOP>
                                    <span class="material-icons md-48" onClick={this.ajouterEventModal.bind(this)} >add_circle</span>
                                    <label style={{fontSize:25}}>Nouveau</label>
                                    </NouveauOP>
        
                                    <FiltrageBox>
                                    <label style={{fontWeight:"bold",justifyContent:"center",color:"#57b846",fontSize:"x-large",marginBottom:50,marginTop:5}}>Filtrage</label>
                                        <Filtre >
                                            <label>titre</label>
                                            <InputFiltrage id="filtreNom" type="text" ></InputFiltrage>
                                        </Filtre>
                                        <Filtre >
                                            <label>categorie</label>
                                            <SelectCateg id="filtreCateg" name="categorie" >
                                                <option>Match</option>
                                                <option>Conférence de presse</option>
                                            </SelectCateg>
                                        </Filtre>
                                        <Button onClick={this.filtrer.bind(this)}>Filtrer</Button>
                                    </FiltrageBox>

                                 </GestionOP>
                                 {this.state.openModal && (
                        <Modal>
                        <ModalContainer id="M1" >
                            <Title>Ajouter un Evenement</Title> 
                             <ClosedModalButton onClick={this.fermerModal.bind(this)}></ClosedModalButton>
                           <ModalInfoContainer id="M2" >
                                <ModalImage style={{display:"grid" ,paddingLeft:0}}>
                                    <Title>Equipe A</Title>
                                    <Filtre>
                                    <label>nom</label>
                                        <InputFiltrage id="equipeA" onChange={this.controle.bind(this)}></InputFiltrage>
                                    </Filtre>
                                    <FileReader img="assets/images/LogoFaf.png" newImage={(url)=>this.setState({selectedImageA:url})}/>
                                </ModalImage>
                                <ModalInfo>
                                    <Filtre style={{display: "contents"}}>
                                    <label>Titre Evenement</label>
                                        <InputFiltrage id="nomNewEv" onChange={this.controle.bind(this)}></InputFiltrage>
                                    </Filtre>
                                    <Filtre style={{display: "contents"}}>
                                    <label>Lieu Evenement</label>
                                        <InputFiltrage id="lieuNewEv" onChange={this.controle.bind(this)}></InputFiltrage>
                                    </Filtre> 
                                    <Filtre style={{display: "contents"}}>
                                        <label>Type Evenement</label>
                                        <SelectCateg id="typeNewEv" onChange={this.controle.bind(this)}>
                                        <option>Match</option>
                                        <option>Conférence de presse</option>
                                        </SelectCateg>
                                         </Filtre> 
                                         
                                        <Filtre style={{display: "contents"}}>
                                        <label>Date de l'événement</label>
                                         <DatePicker className="datepicker" showTimeSelect dateFormat="dd/MM/yyyy h:mm aa" id="dateNewEv"  selected={this.state.selectedDate} onChange={this.controleDate.bind(this)}
                                         />
                                        </Filtre> 
                                        <Filtre style={{display: "contents"}}>
                                        <label>Date limite de demandes</label>
                                         <DatePicker className="datepicker"
                                                    id="dateLimiteNewEv"
                                                    selected={this.state.selectedDateLimite}
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
                                        <InputFiltrage id="equipeB" onChange={this.controle.bind(this)}></InputFiltrage>
                                    </Filtre>
                                    <FileReader img="assets/images/LogoFaf.png" newImage={(url)=>this.setState({selectedImageB:url})}/>
                                </ModalImage>
                           </ModalInfoContainer>
                           <label id="errorPhrase" style={{marginTop:5+"px",color:"red",fontStyle:"italic",fontSize:12+"px"}}></label>
                            
                            <ModalGestionContainer id="M3" >
                               
                                
                           {(this.state.vide || this.state.ctlError!==""  )?(
                                <Button  disabled={true}  >Ajouter</Button> 
                                    
                                  ):(
                                  <Button onClick={this.ajouterEvent.bind(this) } >Ajouter</Button>
                                  )
                                  }
                                
                            </ModalGestionContainer>
                        </ModalContainer>
                        </Modal>
                    )
                    }
        
        
        
                                <EventContainer listeEvent={this.state.filtredListe} actualiser={this.actualiser.bind(this)}/>
                   
                         </Container>
                                
                         </Fragment>
                 )
             }
}
export default EvenementPage