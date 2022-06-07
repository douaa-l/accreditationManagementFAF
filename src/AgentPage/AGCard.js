import React, { Fragment } from 'react'
import { FlexContainer, FlexElement,ImageBox,InfoBox } from '../AccueilAdminFAF/Styles/OrganismesStyle';
import AccepterRefuser from '../EvenementPage/AccepterRefuser';


class AGCard extends React.Component{

    constructor(props){
        super(props)
        this.state={
            nomAG:props.ag.nom,
            prenomAG:props.ag.prenom,
            imageAG:props.ag.photo,
            idOP:props.ag.idOp,
            matricule:props.ag.matricule
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.props.ag.photo?(
            this.setState({
                imageAG:this.props.photo
            })
        ):(
            this.setState({
                imageAG:"/assets/images/admin2.jpg"
            })
            )
    }

    render(){
        console.log(this.props.url)
        return(
            <div style={{display:"grid",justifyItems:"center",marginTop:20+"px"}}>
                 {(this.props.url=="getDemandes.php")?(
                    <AccepterRefuser matricule={this.state.matricule} idEvent={this.props.idEvent}/>
                ):(null)} 
            <FlexElement>
                <ImageBox>
               <img src={this.state.imageAG} alt="logo" class="navbar-brand navbar-logo" href="#" style={{height:100,width:150}}></img>
               </ImageBox>
              <InfoBox>
                <label>{this.state.nomAG}</label>
                </InfoBox>
            </FlexElement>
            </div>
        )
    }

}
export default AGCard;