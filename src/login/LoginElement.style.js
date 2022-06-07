import styled from "styled-components";


export const Backgroundsite = styled.div`
  width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #012611;
    background: -webkit-linear-gradient(
      -150deg,
      #01401c,
      #02733e,
      #038c4c,
      #01401c
    );
    background: -o-linear-gradient(-150deg, #01401c, #02733e, #038c4c, #01401c);
    background: -moz-linear-gradient(-150deg, #01401c, #02733e, #038c4c, #01401c);
    background: linear-gradient(-150deg, #01401c, #02733e, #038c4c, #01401c);
  
`


export const LoginForm = styled.div`
  width: 1200px;
    height: 700px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px;
`

export const SpanTitle =styled.span`

@font-face {
  font-family: Poppins-Bold;
  src: url("../fonts/poppins/Poppins-Bold.ttf");
}
font-family: Poppins-Bold;
font-size: 24px;
color: #333333;
line-height: 1.2;
text-align: center;

width: 100%;
display: block;
padding-bottom: 20px;
padding-top: -100px;

`

export const Image =styled.img`
width:${(props)=>props.wid} ;
height:${(props)=>props.h} ;
padding-top:${(props)=>props.padtop };
padding-left:${(props)=>props.padl };
border-radius: ${(props)=>props.bordra};

`

export const InputDiv =styled.div`
position: relative;
  width: 60%;
  z-index: 1;
  margin-bottom: 10px;
  
  margin-top: 10px;

`

export const InputBox =styled.input`

font-family: Poppins-Medium;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  border-color:#02733e;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 100px 0px 50px;
  margin-right:90px;
  margin-top:10px;
  
`
export const FocusInput = styled.span`

`

export const SymbolInput = styled.span`


`

export const ButtonLoging = styled.button`
font-family: Montserrat-Bold;
font-size: 15px;
line-height: 1.5;
color: #fff;
text-transform: uppercase;
border-color:#d90b1c;
width: 40%;
height: 50px;
border-radius: 25px;
background: #d90b1c;
display: -webkit-box;
display: -webkit-flex;
display: -moz-box;
display: -ms-flexbox;
display: flex;
justify-content: center;
align-items: center;
padding: 0 25px;



&:hover{
  background:#02733e ;
  border-color:#02733e ;
}
`
export const ContainerButton = styled.div`
width: 100%;
display: -webkit-box;
display: -webkit-flex;
display: -moz-box;
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-top: 20px;

`