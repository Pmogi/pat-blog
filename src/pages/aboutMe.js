import React from "react";
import { graphql } from "gatsby";
import get from 'lodash/get'
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Layout from '../components/layout'
import Seo from "../components/seo";
import Hero from "../components/hero";
import * as styles from '../templates/blog-post.module.css'

class AboutMe extends React.Component {
    render() {
        const [aboutMe] = get(this, 'props.data.allContentfulAboutMe.nodes')
        return (
            <Layout location={this.props.location}>
                <Seo title="About me" 
                image={`http:${aboutMe.heroImage}`}/>
                <Hero 
                    image={aboutMe.heroImage?.gatsbyImageData}
                    title = {aboutMe.header}
                />
                <div className={styles.container}>
                    <span className={styles.meta}>
                        Last Published : {aboutMe.publishDate}
                    </span>
                </div>
                
                <div className = {styles.article}>
                    <div className= {styles.body}>
                        {aboutMe.body?.raw && renderRichText(aboutMe.body)}
                    </div>
                </div>
                




                {/* <body>
                    {aboutMe.header}
                    {renderRichText(aboutMe.body)}
                </body> */}
            </Layout>
        )
    }
}

export default AboutMe;

export const pageQuery = graphql`
    query AboutMeQuery {
        allContentfulAboutMe(filter: { contentful_id: {eq: "15sn5m9uS6FniT7i70bcrp"}}){
            nodes {
                header
                slug
                heroImage: image {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        width: 1180
                    )
                }
                body {
                    raw
                }
            # date as e.g. July 25, 2022
            publishDate(formatString: "MMMM Do, YYYY")    
            }
        }
    }`