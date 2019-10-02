import React from 'react';
import Layout from "../components/Layout";
// import { StaticQuery , graphql } from "gatsby";
import { graphql } from "gatsby";
import StyleHero from "../components/StyleHero";
import Contact from "../components/Contact/Contact";








// const getSiteData = graphql`
//     query{
//         site {
//             siteMetadata {
//                 lovername
//             }
//         }
//     }
// `

// const contact = () => {
//     return (
//         <Layout>
//             <StyleHero img={this.props.data.connectBcg.childImageSharp.fluid} />

//             <h1>Contact Pages</h1> 
//             <StaticQuery 
//                 query={getSiteData} 
//                 render={nipa =>{
//                     console.log(nipa)
//                     return(
//                         <div>
//                             <h4>TitleStaticQuery: {nipa.site.siteMetadata.lovername} </h4>
//                         </div>
//                     )
//                 } }
//             />
//         </Layout>
//     )
// }

// export default contact


export default function contact({ data }) {
    return(
        <Layout>
            <StyleHero img={data.connectBcg.childImageSharp.fluid} />
            <Contact />
        </Layout>
    )
    
}


export const query = graphql`
    query {
      connectBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`








