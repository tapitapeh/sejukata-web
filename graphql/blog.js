import gql from "graphql-tag";

export const blogsQuery = gql`
query($slug: String!) {
  ip: blogCollection(where: {url: $slug }, limit: 1) {
    items {
      sys {
        id
      }
      title
      subtitle
      datetime
      url
      coverImage {
        url
        title
        description
      }
      content {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
            }
          }
        }
      }
      author {
        ... on Author {
          name
          image {
            url
          }
          description
          social
        }
      }
    }
  }
}
`
