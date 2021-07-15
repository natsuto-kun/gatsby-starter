import React from "react";
import "twin.macro";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { ReactNode } from "react";
import Top from "../components/Top";
import Works from "../components/Works";
import Skills from "../components/Skills";
import MyProfile from "../components/MyProfile";

type LayoutProps = {
  children: ReactNode;
};
/*
const PostLink = ({ post }) => {
  const { title } = post;
  const description = post.description.description;

  return (
    <div className="post-link-text">
      <h2>{title}</h2>
      <p className="post-link-body">{description}</p>
    </div>
  );
};
*/

/*     {data.allContentfulPost.edges.map((edge) => (
        <PostLink key={edge.node.slug} post={edge.node} />
      ))} */

const TopStyle = {
  height: "15%",
};

const Main: React.VFC = () => {
  return (
    <div>
      <Top style={TopStyle}></Top>
      <Layout>
        <MyProfile></MyProfile>
        <Works></Works>
        <Skills></Skills>
      </Layout>
    </div>
  );
};

export default Main;

/*export const query = graphql`
  query allContentfulPost {
    allContentfulPost {
      edges {
        node {
          title
        }
        description {
          description
        }
        slug
      }
    }
  }
`;
*/
