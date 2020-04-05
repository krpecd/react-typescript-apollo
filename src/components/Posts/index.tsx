import React from 'react'
import Posts from './Posts'
import { usePostsQuery, Post } from '../../graphql/generatedHooks'

const PostsContainer = () => {
  const {loading, error, data} = usePostsQuery()

  return (
    <Posts 
      loading={loading} 
      error={error} 
      posts={data?.posts?.data?.length ? data.posts.data as Post[] : undefined}
    />
  )
}

export default PostsContainer
