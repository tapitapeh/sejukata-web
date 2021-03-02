import gql from "graphql-tag";

export const blogsQuery = gql`
query($slug: String!) {
  ip: blogCollection(where: {url: $slug }, limit: 1) {
    items {
      title
      subtitle
      url
      coverImage {
        url
        title
        description
      }
      content {
        json

      }
    }
  }
}
`
