import React from 'react'
import { Typography, Card, Grid } from '@material-ui/core'
import { Post } from '../../graphql/generatedHooks'
import { ApolloError } from 'apollo-boost'

interface Props {
  loading?: boolean
  error?: ApolloError | undefined
  posts: Post[] | undefined
}

const Posts = (props: Props) => {
  const {loading, error, posts} = props

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2">Posts</Typography>
      </Grid>
      
      {loading && <Grid item xs={12}><Typography>loading... </Typography></Grid>}
      {error && <Grid item xs={12}><Typography>{error.message}</Typography></Grid>}
 
      {posts?.map((post: Post) => (
        <Grid 
          item 
          xs={12} 
          key={post.id as string} // Weird 3rd party API implementaion. Proptery ID can be undefined.
        >
          <Card style={{padding: '20px'}}>
            {post?.title && <Typography variant="h5">{post.title}</Typography>}
            {post?.body && <Typography>{post.body}</Typography>}
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
