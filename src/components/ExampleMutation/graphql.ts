import {gql} from 'apollo-boost'

gql`
  mutation createPost($input: CreatePostInput!) {
    createPost (input: $input) {
      id
    }
  }
`