import React from 'react'
import ExampleQuery from './ExampleQuery'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const QUERY = gql`
  query posts{
    posts {
      data {
        id
      }
    }
  }
`

const ExampleQueryContainer = () => {
  const {data} = useQuery(QUERY)
  console.log("App -> data", data)

  return (
    <ExampleQuery />
  )
}

export default ExampleQueryContainer
