import {gql} from 'apollo-boost'

gql`
# will geenrate usePostsQuery() hook by the codegen tool
query posts {
  posts {
    data {
      id
    }
  }
}
`