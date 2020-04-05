import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import PostsContainer from './components/Posts';
import ExampleMutationContainer from './components/ExampleMutation';
import { AppBar, Toolbar, Container, ButtonGroup, Button } from '@material-ui/core';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api', // online playground is accessible on this url
});

function App() {
  const [page, setPage] = useState<'query' | 'mutation'>('query')

  return (
    <ApolloProvider client={client}>
      <AppBar position="fixed">
        <Toolbar>
          <ButtonGroup variant="contained">
            <Button onClick={() => setPage('query')}>Example query</Button>
            <Button onClick={() => setPage('mutation')}>Example mutation</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{paddingTop: '150px'}}>
        {page === 'query' && <PostsContainer />}
        {page === 'mutation' && <ExampleMutationContainer />}
      </Container>
    </ApolloProvider>
  );
}

export default App;
