import React from 'react'
import ExampleQuery from './ExampleQuery'
import { usePostsQuery } from '../../graphql/generatedHooks'

const ExampleQueryContainer = () => {
  const {data} = usePostsQuery()
  console.log("ExampleQueryContainer -> data", data)

  return (
    <ExampleQuery />
  )
}

export default ExampleQueryContainer
