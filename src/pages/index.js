import React from "react";
import Layout from "../components/layout";
import UseInicio from "../hooks/useinicio";
import {css} from '@emotion/core';
import styled from '@emotion/styled';


const HomeInicio =  styled.div`
    text-align: center; 
    max-width:800px;
    margin: 0 auto;
`


const IndexPage = () => {

  const inicio = UseInicio()
  const {nombre,contenido,imagen}= inicio[0];


  console.log(imagen);
 
  return(
        <Layout>

          <img
           tag="section" 
           src={imagen.publicURL}
           css={css`height:600px;width:100%;opacity: 0.9;`}
          /> 

          <HomeInicio >
            <h1 css={css`margin-top:0;color:orange;font-weight: 700; margin-bottom: 0;`}>{nombre}</h1>
            <p css={css`margin-top:0`}>{contenido}</p>
          </HomeInicio>
          
        </Layout>  
    )

}

export default IndexPage
