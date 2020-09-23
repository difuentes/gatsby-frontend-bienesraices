
import React from "react"
import {Link,graphql,useStaticQuery} from 'gatsby';
import Navegacion from './navegacion'
import {css} from '@emotion/core';
import styled from '@emotion/styled';



const NavLink = styled(Link)`
        color:white;
        padding: .5rem;
        font-weigth:700;sas
        font-family : "Lato", sans-serif;
        text-decoration: overline;
        
        &last-of-type{
            margin-right:0;
        }

        &.pagina-actual{
            border-bottom: 2px solid white;
        }


`
const Header = () => {

  //consulta para traer el logo

  const {logo} = useStaticQuery(graphql`
    query {
      logo: file(relativePath:{eq:"logo.png"}){
        publicURL
        
      }
    }
  
  `)
    
  return(
    <header 
      css={css`
          background-color:orange;
          padding:1rem;
          color :white;
      `}
    >
      <div 
        css={css`
          max-width :120rem;
          margin: 0 auto;
          text-align:center;
          text-decotarion:none;

          @media (min-width:768px){
            display:flex;
            align-items:center;
            justify-content:space-between;
          }

          
        `}
        
      > 
            <Link to="/">
              <img src={logo.publicURL} alt="logo bienes raices"  width="50px;"/> 
               <NavLink activeClassName="pagina-actual" >DiFuentes</NavLink>
            </Link>
            
            
            
            <Navegacion/>
      </div>

    </header>
  );
};


export default Header
