import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby";
// import Img from 'gatsby-image';
import "../pages/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="root">
      <Navbar />
      <PageLinks />

      <section id="Page" className="row mx-5 bg-light">
        <section className="container"
          dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
