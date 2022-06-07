import styled from "styled-components";
import {MdClose} from 'react-icons/md'
import{BiArrowBack} from 'react-icons/bi'


export const Container=styled.div`
    flex-direction: row;
    display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
    width: 100%;
    height: 90%;
    border-radius: 5px;
    background-color: white;
    margin:10px;
    padding: 20px;
   
    
    `
    
export const Button=styled.button`
font-size: medium;
font-weight: bold;
color: #57b846;
width: 100%;
background-color: white;
border-radius: 5px;
padding: 5px;
margin-bottom: 5px;
margin-top: 15px;
border-style: solid;
border-width: 2px;
margin-right: 15px;
border-color: #57b846;
//border-color:${(props)=>props.color}
&:hover{
    color: white;
background-color: #57b846;  
//background-color: ${(props)=>props.color};
}
&:disabled{
    color: grey;
    background-color:rgba(205, 174, 114,0.5);
    border-color:grey;
    
}
`


export const Filtre=styled.div`

margin: auto;
display: flex;
flex-direction: row;
margin-bottom: 10px;
padding: 5px;
width: 25%;
justify-content: center;
@media screen and (max-width:750px){
flex-wrap: wrap;
width: 50px; 
}
`
export const SelectCateg=styled.select`
margin-left:15px;
margin-right:15px;
border-radius:15px;
border-color: rgb(205, 174, 114);
border-style: solid;
border-width: 2px;
width: 180px;
padding:5px;
&:hover{
box-shadow: 3px 3px 3px #747d77;
}
`
export const InputFiltrage=styled.input`
margin-left:15px;
margin-right:15px;
border-radius:15px;
width: 200px;
padding:5px;
border-color: rgb(205, 174, 114);
border-style: solid;
border-width: 2px;
&:hover{
box-shadow: 3px 3px 3px #747d77;

}

`

export const NouveauOP=styled.div`

display: flex;
flex-wrap: wrap;
flex-direction: row;
align-content: center;
width: 100%;
padding-left: 10px;

`
export const GestionOP=styled.div`
display: flex;
flex-direction: column;

align-content: space-between;
height: 75%;
width: 25%;
border-width: 3px;
border-color: rgba(205, 174, 114,0.5) ;
border-radius: 5px;
padding: 10px;
margin:10px;
@media screen and (max-width:900px){
    height:75%;
width: 40%; 
}
`
export const FiltrageBox=styled.div`
display: flex;
flex-direction: column;
align-content: space-between;
justify-items: center;
position: relative;
height: 75%;
width: 100%;
background-color: white;
border-radius: 5px;
border-width: 2px;
border-style: solid;
border-color:rgb(205, 174, 114) ;
padding: 10px;
margin:10px;


`

export const InfoBox=styled.div`
display: flex;
flex-direction: column;
height: 50px;
width: 150px;
background-color: #57b846;
margin-bottom: 0px;
border-radius: 5px;
justify-content: center;
align-content: center;

@media screen and (max-width:900px){
width: 120px; 
height: 40px;
font-size: 15px;


 
}
`
export const ImageBox=styled.div`

height: 100px;
width: 140px;
border-radius: 5px;

@media screen and (max-width:900px){
width: 120px; 
height: 80px;


 
}
`

export const FlexContainer=styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: space-between;
height: 88%;
width: 100%;
overflow-y: scroll;
@media screen and (max-width:900px){
    height: 88%;
width: 100%; 
}
`
export const FlexElement=styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
height: 150px;
width: 152px;
border-radius: 5px;

border-color: #57b846;
border-width: 2px;
border-style: solid;
margin: 20px;
align-content: center;
justify-content: center;
 color: white;
 font-size: 18px;
 font-weight: bold;
 &:hover{
height: 160px;
width: 162px;
box-shadow: 3px 3px 3px #747d77;
 }
@media screen and (max-width:900px){
    height: 120px;
width: 122px; 
&:hover{
height: 130px;
width: 130px;

 }
}
`
export const Modal =styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
`
export const ModalContainer=styled.div`
position: relative;
padding: 15px;
display: flex;
flex-direction:column;
flex-wrap: nowrap;
height: 80%;
width: 80%;
background-color: white;
border-radius: 15px;
`


export const ModalImage=styled.div`
padding-top: 0%;
padding-left: 10%;
padding-right: 30%;
height: 100%;
width:40%;
position: relative;
`
export const ModalInfo=styled.div`
display: relative;
justify-content: center;
padding-left: 15px;
height: 100%;
width:60%;
`
export const ModalInfoContainer=styled.div`
margin-top: 10px;
border-top: 2px solid #57b846;
padding: 15px;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
height: 80%;
width:100%;
overflow-y: auto;


`
export const ModalGestionContainer=styled.div`
padding: 15px;
display: flex;
flex-wrap: nowrap;
align-content: space-between;
flex-direction: row;
height: 20%;
width:100%;

`
export const ClosedModalButton=styled(MdClose)`
cursor: pointer;
position: absolute;
top:10px;
right: 10px;
width: 32px;
height: 32px;
padding: 0;
margin:0;
z-index: 10;

`
export const BackModalButton=styled(BiArrowBack)`
cursor: pointer;
position: absolute;
top:10px;
left: 10px;
width: 32px;
height: 32px;
padding: 0;
margin:0;
z-index: 10;

`

export const Title=styled.h3`
font-weight: bold;
margin-bottom: 35px;

`
export const Info=styled.p`
font-size:18px ;
`

export const CheckCircle=styled.div`

`


export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    object-fit: cover;
    border-radius: 30%;
  }
  .circle {
    width: 186px;
    height: 186px;
    border-radius: 30%;
  }
  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }
    &:hover {
      background: blue;
    }
  }
`

export const LogoEvent = styled.div`
  

  align-self: center;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 30%;
  }
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 30%;
  }
  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }
    &:hover {
      background: blue;
    }
  }
`
export const FlexElementEvent=styled.div`
cursor: pointer;
display: flex;
flex-wrap: nowrap;
flex-direction: column;
height: 100px;
width: 700px;
border-radius: 5px;
background-color:white;
 border-color: rgba(205, 174, 114,0.5);
 border-style: solid;
 border-width: 2px;
margin: 20px;
align-content: center;
justify-content: center;
 color: white;
 font-size: 18px;
 font-weight: bold;
 
 &:hover{
height: 110px;
width: 700px;
 
overflow:hidden;
box-shadow: 3px 3px 3px #747d77;
 }
@media screen and (max-width:900px){
    height: 100px;
width: 330px;
&:hover{
height: 100px;
width: 330px;
}}
`



