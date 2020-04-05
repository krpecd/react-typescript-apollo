import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api', // online playground is accessible on this url
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app </h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
