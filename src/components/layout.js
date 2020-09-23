
import React from "react"
import Helmet from 'react-helmet';
import {Global,css} from '@emotion/core';
import Header from './header';

const Layout = ({children}) => {
  

  return (
    <>
      <Global
        styles={css`
          body{
           font-size : 1.6rem;
           line-height :2;
           font-family:"Lato" ,sans-serif     
          }
          html{
            font-size:62.5%;
            box-sizing:border-box;
          }
          *,*:before,*:after{
            box-sizing:inherit;
          }
          h1,h2,h3{
            margin:0;
            line-heigth:1.5;
          }
          h1,h2{
            text-align:center;
            font-family:"Lato" ,sans-serif ;
            font-weight:300;    
          }
          h3{
            font-family:"Roboto" ,sans-serif;
          }
          ul{
            margin:0;
            padding:0;
          }
          .contenedor{
            max-width:1200px;
            margin:0 auto;
            width:95%;
          }
          img{
            max-width:100%;
          }

        `}
      />

    <Helmet>
        <title>Difuentes - Bienes Raices gatsby</title>
        <meta name="description" content="Sitio web de bienes raices Difuentes"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
    </Helmet>
    
    <Header/>
      {children}
    </>
  )
}


export default Layout
