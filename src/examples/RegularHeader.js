import React from 'react';
import { StaticQuery , graphql } from "gatsby";

const getSiteData = graphql`
    query{
        site {
            siteMetadata {
                title
                description
                author
                data {
                    name
                }
            }
        }
    }
`


const RegularHeader = () => {
    return (
        <StaticQuery 
            query={getSiteData} 
            render={nipa =>{
                console.log(nipa)
                return(
                    <div>
                        <h4>TitleStaticQuery: {nipa.site.siteMetadata.title} </h4>
                    </div>
                )
            } }
        />
    )
}

export default RegularHeader
