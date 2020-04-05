import {gql} from 'apollo-boost'

gql`
# the codegen tool will generate usePostsQuery() hook 
query posts {
  posts (options: {paginate:{page: 1, limit: 10}}) {
    data {
      id
      title
      body
    }
  }
}
`