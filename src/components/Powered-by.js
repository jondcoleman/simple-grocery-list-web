/* eslint react/prefer-stateless-function: 0 */

import React from 'react'
import packageJSON from '../../package.json'

export default React.createClass({
  render() {
    const deps = Object.keys(packageJSON.dependencies).map((dep, i) => <li key={i}>{dep}</li>)
    const devDeps = Object.keys(packageJSON.devDependencies).map((dep, i) => <li key={i + 10}>{dep}</li>)

    return (
      <div>
        <h2>Powered by</h2>
        <a href="https://david-dm.org/granze/react-starterify"><img src="https://david-dm.org/granze/react-starterify/status.svg" alt="deps status" /></a>&nbsp
        <a href="https://david-dm.org/granze/react-starterify#info=devDependencies"><img src="https://david-dm.org/granze/react-starterify/dev-status.svg" alt="dev deps status" /></a>
        <ul>
          {[...deps, ...devDeps]}
        </ul>
      </div>
    )
  }
})