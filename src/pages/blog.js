import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import StyleHero from "../components/StyleHero";



const blog = ({data}) => {
  return (
    <Layout>
      <StyleHero img={data.blogBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export default blog


export const query = graphql`
    query {
      blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`



