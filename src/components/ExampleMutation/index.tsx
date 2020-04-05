import React from 'react'
import ExampleMutation from './ExampleMutation'
import { useCreatePostMutation } from '../../graphql/generatedHooks'

const ExampleMutationContainer = () => {
  const [createPost] = useCreatePostMutation() 
  console.log("ExampleMutationContainer -> createPost", createPost)

  return (
    <ExampleMutation />
  )
}

export default ExampleMutationContainer
