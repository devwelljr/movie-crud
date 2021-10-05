import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1 id="title">Movie Card Library CRUD</h1>
        <Link to="/movie-crud/movies/new">ADICIONAR CARTÃO</Link>
      </header>
      <Switch>
        <Route path="/movie-crud" component={ MovieList } />
        <Route exact path="/movie-crud/" component={ MovieList } />
        <Route path="/movie-crud/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movie-crud/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movie-crud/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route status={404} component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
