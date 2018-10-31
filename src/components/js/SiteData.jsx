import React from "react";
import { StaticQuery, graphql } from "gatsby";

/**
 * Statefull functional component
 * <StaticQuery =`{}`
 */
const SiteData = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteURL
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="SiteData">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <ul key={index}>
            <li style={{ listStyle: `none`, textAlign: `center` }}>
              <a href={node.fields.slug}>{node.frontmatter.title}</a>
            </li>
          </ul>
        ))}
      </div>
    )}
  />
);

export default SiteData;
