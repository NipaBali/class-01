import React, { Component } from "react";
import Layout from "../components/Layout";
// import Button from "../examples/Button";
// import Header from "../examples/Header";
// import RegularHeader from "../examples/RegularHeader";
import StyleHero from "../components/StyleHero";
import { graphql } from "gatsby";




export default class tours extends Component {
  render() {
    return (
        <Layout>
          <StyleHero img={this.props.data.connectBcg.childImageSharp.fluid} />
        
        </Layout>
      
    )
  }
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



