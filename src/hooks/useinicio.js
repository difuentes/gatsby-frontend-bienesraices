import {graphql,useStaticQuery} from 'gatsby'



const USeInicio = () => {
   const resultado = useStaticQuery(graphql`
    query{
        allStrapiPaginas(filter:{nombre : {eq:"Home"}})
            {
                nodes{
                    id
                    nombre
                    contenido
                    imagen{
                        publicURL
                          
                      }
            }
            }	
        }
   `)

   console.log(resultado);
   return resultado.allStrapiPaginas.nodes.map(inicio =>({
        nombre: inicio.nombre,
        contenido : inicio.contenido,
        imagen : inicio.imagen
   }));
}
 
export default  USeInicio;