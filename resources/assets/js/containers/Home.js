import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
    this.abcd = (e) => {
      console.log('asdasd');
    }
  }
  render() {
    return (
      <div>
            <Link to={'/example'}>Example Comp</Link>
            <div onClick={this.abcd}>asdasdasdasdasda</div>
            Homepageeeeeeeeeeeeeeeeeeeeeeeeee
      </div>
    )
  }
}
