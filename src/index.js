'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBIzU0R6IRQ3pQ7ltgP_n0b7BzNC-E55Xc';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
