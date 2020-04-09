import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import './App.css';
import Navigation from './components/Navigation';
import Application from './components/Application';

let check = false;
class App extends React.Component {
  showNavigation = () => {
    if (check === false) {
      this.props.changeClassName("col-md-12 navigation");
      check = true;
    } else {
      this.props.changeClassName("col-md-12 navigation display");
      check = false;
    }

  }
  render() {
    return (
      <div className="App container-fluid">
        <div className="row app-container-row">
          <div className="col" />
          <div className="col-sm-10 app-container">
            <div className="row toggler-row">
              <div className="col-sm-12 toggler">
                <Button onClick={this.showNavigation}>
                  <i className="fas fa-bars icon" />
                </Button>
              </div>
            </div>
            <Navigation />
            <Application />
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeClassName: (string) => {dispatch({type: 'className', string})}
  }
}

export default connect(null, mapDispatchToProps)(App);
