import React from 'react'
import ExampleMutation from './ExampleMutation'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const MUTATION = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost (input: $input) {
      id
    }
  }
`

const ExampleMutationContainer = () => {
  const [createPost] = useMutation(MUTATION) 
  console.log("ExampleMutationContainer -> createPost", createPost)

  return (
    <ExampleMutation />
  )
}

export default ExampleMutationContainer
