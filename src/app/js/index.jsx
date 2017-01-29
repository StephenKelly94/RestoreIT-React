import React from 'react';
import { render } from 'react-dom';
import Layout from './pages/Layout';

class App extends React.Component {

  render () {
    return <Layout message="Hello World!"/>
  }
}

render(<App/>, document.getElementById('app'));
