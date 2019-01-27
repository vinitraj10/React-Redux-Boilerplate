import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Main from '../components/main';

class Routes extends Component {
  render() {
    const { location } = this.props;
    return (
      <Switch location={location}>
        <Route exact path="/" component={Main} />
      </Switch>
    );
  }
}
export default withRouter(Routes);
