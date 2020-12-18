import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const WorkPostTemplate = ({
  content,
  contentComponent,
  title,
  date,
  category,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-4 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object,
};

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WorkPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        category={post.frontmatter.category}
      />
    </Layout>
  );
};

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default WorkPost;

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
      }
    }
  }
`;
