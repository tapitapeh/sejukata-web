import gql from "graphql-tag";

export const blogsQuery = gql`
query {
  ip: blogCollection(order: datetime_DESC) {
    items {
      title
      subtitle
      datetime
      url
      coverImage {
        url
        title
        description
      }
      author {
        ... on Author {
          name
          image {
            url
          }
        }
      }
    }
  }
}
`
