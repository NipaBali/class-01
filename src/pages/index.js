import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import "../sass/layout.scss";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services"

import StyleHero from "../components/StyleHero";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({data}) => (
    <Layout>
        {/* Start Banner Area */}
        <StyleHero home="true" img={data.defaultBcg.childImageSharp.fluid} >
            <Banner title="continue exploring" info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever">
                <AniLink fade to="/tours" className="btn-white">exlore tours</AniLink>
            </Banner>
        </StyleHero>
        {/* End Banner Area */}
        
        <About />

        <Services />
        
    </Layout>
)




export const query = graphql`
    query defaultBcg {
        defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`






