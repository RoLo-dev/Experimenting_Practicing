import React from 'react';
import FetchJobs from './FetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const { jobs, loading, error } = FetchJobs()
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, try refreshing</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
