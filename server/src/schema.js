import { gql } from "apollo-server";

const typeDefs = gql`
  type Post {
    content: string
  }
`;
