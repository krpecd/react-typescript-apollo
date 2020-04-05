import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExampleQueryContainer from './components/ExampleQuery';
import ExampleMutationContainer from './components/ExampleMutation';

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
        <Typography variant="h1">Apollo react app </Typography>
        {page === 'query' && <ExampleQueryContainer />}
        {page === 'mutation' && <ExampleMutationContainer />}
      </Container>
    </ApolloProvider>
  );
}

export default App;
