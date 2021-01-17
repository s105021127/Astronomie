import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import ProjectList from './views/projectList'
import HomePage from './views/homePage';
import SignUp from './views/signUp';

class App extends Component {
//  history = useHistory();

  // This function is called when the component has been loaded
  async componentDidMount() {

  }

  render() {
    return (
      <HomePage></HomePage>
    );
  }
}

export default App;
