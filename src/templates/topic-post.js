import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const TopicPostTemplate = ({
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

TopicPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object,
};

const TopicPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TopicPostTemplate
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

TopicPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TopicPost;

export const pageQuery = graphql`
  query TopicPostByID($id: String!) {
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
