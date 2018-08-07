/* eslint max-len: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import Footer from '../components/Footer';
import FeaturedProject from '../components/FeaturedProject';
import FeaturedPost from '../components/FeaturedPost';
import Header from '../components/Header';
import Button from '../components/Button';

const HCIWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -2rem;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Text = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 850px;
  margin: 0rem auto;
  text-shadow: ${props => props.theme.shadow.text.big};
`;

const Index = ({
  data: {
    hcis: { edges: hciEdges },
    algorithms: { edges: algorithmEdges },
  },
}) => (
  <Layout>
    <Header
      big
      title={
        <React.Fragment>
          Technologies <br /> <br />
          On the way
        </React.Fragment>
      }
    />
    <Container>
      <Text>
        To me, mathematics, computer science, and the arts are insanely related. They're all creative expressions.{' '}
        <br />
        <Link to="/hci">
          <Button type="primary">HCI</Button>
        </Link>
      </Text>
    </Container>
    <Container type="big">
      <HCIWrapper>
        {hciEdges.map(hci => (
          <FeaturedProject
            key={hci.node.frontmatter.title}
            cover={hci.node.frontmatter.cover.childImageSharp.fluid}
            customer={hci.node.frontmatter.customer}
            path={hci.node.fields.slug}
            title={hci.node.frontmatter.title}
          />
        ))}
      </HCIWrapper>
    </Container>

    <Container>
      <Text>
        <Link to="/algorithm">
          <Button type="secondary">Algorithms</Button>
        </Link>
      </Text>
      <PostsWrapper>
        {algorithmEdges.map(algorithm => (
          <FeaturedPost
            key={algorithm.node.frontmatter.title}
            cover={algorithm.node.frontmatter.cover.childImageSharp.fluid}
            date={algorithm.node.frontmatter.date}
            path={algorithm.node.fields.slug}
            title={algorithm.node.frontmatter.title}
            category={algorithm.node.frontmatter.category}
          />
        ))}
      </PostsWrapper>
    </Container>

    <Footer />
  </Layout>
);

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    hcis: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    algorithms: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    hcis: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "hci" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            customer
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    algorithms: allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "algorithm" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            date(formatString: "DD.MM.YYYY")
            category
          }
        }
      }
    }
  }
`;
