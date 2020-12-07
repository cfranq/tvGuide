import React, { useEffect, useState } from 'react';
import './App.css';
const axios = require('axios').default;

function App() {
 useEffect(() => {
    axios.get('http://api.tvmaze.com/singlesearch/shows?q=girls')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
})
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
