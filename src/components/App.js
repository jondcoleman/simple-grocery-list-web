/* eslint react/prefer-stateless-function: 0 */

import React from 'react'
import { Link } from 'react-router'
import packageJSON from '../../package.json'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  returnSomething(something) {
    // this is only for testing purposes. Check /test/components/App-test.js
    return something
  },
  render() {
    const version = packageJSON.version

    return (
      <div>
        <header>
          <h1>React Starterify {version}</h1>
          <Link to="/about">About</Link>
          <Link to="/poweredby">Powered by Reacting</Link>
        </header>
        <section>
          {this.props.children || 'Welcome to React Starterify'}
        </section>
      </div>
    )
  }
})
