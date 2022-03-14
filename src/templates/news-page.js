import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const NewsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="section">
              <h2 className="title is-size-3 has-text-centered has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content has-text-left" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const NewsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NewsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

NewsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NewsPage;

export const newsPageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
