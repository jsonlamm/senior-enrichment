import React, {Component} from 'react';

import { Link } from 'react-router';

// comments below will mess up
class Main extends Component {
  // same as: const Main = React.createClass({})
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Live from MainComp!</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}

export default Main;
