import React, { Component, Fragment, useEffect } from 'react'
import {  SpanTitle,Image, InputDiv, InputBox, 
     ContainerButton, ButtonLoging } from './LoginElement.style'
import { withRouter } from 'react-router';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

 class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.Usernamehandler=this.Usernamehandler.bind(this)
        this.setPassword= this.setPassword.bind(this)
        this.state = {
             username:"",
             password:"",
      
             message:"",
             iduser:"",


        }
    }
    Usernamehandler(e){
        console.log(e.target.value)
        this.setState({
             username:e.target.value,
        })
        console.log(this.state.username)
   
    }
   
    
    
    setPassword(e){
        this.setState({password:e.target.value})
        console.log("Passset"+this.state.password  )
       }
       

    handleSubmit(e){
        e.preventDefault();
        const  bodyFormData = new FormData();
        bodyFormData.append("username", this.state.username);
        bodyFormData.append("password", this.state.password);
       
        axios({
            method: 'post',
            url: `Login.php`,
            data: bodyFormData,
            headers: { 'Content-Type': `multipart/form-data;boundary=${bodyFormData._boundary}`},
          })
            .then((response)=>{ 
                const result = JSON.parse(JSON.stringify(response)).data
                console.log(result)
              
               if (result.error === false ){
                const history=createHistory({forceRefresh:true})
               if(result.id_user==1){
                history.push('/OP')}
                else{
                    
                }

               this.setState({
                   message:result.message,
                   iduser:result.id_user,
                   username:result.nomAdmin


               }, )
               
              } else{
                
                  var affichage= document.getElementById("alert")
                   affichage.innerHTML=result.message
                   
                   
                  
                   
                 
               }
            
            }
              
           )
            .catch((error)=>{console.log(error)}) ;
        
 
    }
  
 
 
     
    render() {
        return (
          
            <div className="limiter">
            <div className="container-login100"> 
               
            <div className="wrap-login100" style={{flexDirection:"row"}}>

                  <Image src='/assets/images/LogoFaf.png' 
                  alt='IMG' style={{width:300+"px",height:300+"px",marginLeft:150+"px"}}></Image>
				    
                    <form style={{marginRight:100+"px"}} >
                         <img src="/assets/images/admin3.png" style={{height:100+"px"}} alt="Admin1"/>
					     <SpanTitle> Bienvenue Admin</SpanTitle>
				     
					      <InputDiv style={{margin:"auto"}}>
                              <InputBox  type="text" name="username" placeholder="Pseudo" onChange={(e)=>this.Usernamehandler(e)}></InputBox>
                              <span className="focus-input100"></span>
						        
                          </InputDiv>

                          <InputDiv style={{margin:"auto"}}>
                              <InputBox  type="password" name="password" placeholder="Mot de passe" onChange={(e)=>this.setPassword(e)}
                              >
                                 
                              </InputBox>
                              <span className="focus-input100"></span>
						      
                          </InputDiv>  
                          <label id="alert" style={{marginTop:5+"px",color:"red",fontStyle:"italic",fontSize:12+"px"}}></label>
					    <ContainerButton>
                            <ButtonLoging onClick={(e)=>this.handleSubmit(e)}>Connexion</ButtonLoging>
                        </ContainerButton>
                       {/*  <div >
                            <label id="alert"></label>
                        <Link to={'/ForgotPassw'} className="link">Mot se passe oublié?</Link>
                             </div>*/}
                        
                       
                      
                    </form>
                 
                 </div>
                 </div>
                 </div>
         
        )
    }
}

export default withRouter(LoginContainer)