import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import{FaBars}from 'react-icons/fa'


export const Nav =styled.nav`
background: #400106;
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;

border-radius: 5px;
`
export const NavLink=styled(Link)`
color :#fff;
display:flex;
align-items: center;
text-decoration:none;
height: 100%;
padding:0 1rem;
cursor: pointer;
&.active{
    color: #cdae72;
    background: white;
    font-weight: bold;

}
&:hover{
    color:#600000;
    background-color: white;
    font-weight:bold;

}

`
export const Bars=styled(FaBars)`
display:none;

@media screen and (max-width:750px){ display:flex;
color: #fff;
font-size: 1.8rem;
cursor: pointer;
margin: 20px;



}
`
export const NavMenu=styled.div`
display: flex;
align-items: center;

justify-content: space-between;

@media screen and (max-width:750px){
    display: none;
}
`
