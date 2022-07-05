import React from 'react';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        tittle="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row tittle="NETFLIX TRENDING" fetchUrl={requests.fetchTrending} />
      <Row tittle="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row tittle="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;