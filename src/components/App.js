import React, { Component } from 'react';

import Header from './Header';
import Portfolio from './Portfolio';

import { 
    AppWrapper 
  } from './styled-components/App';



class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Portfolio />


      </AppWrapper>
    );
  }
}

export default App;
