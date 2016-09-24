const React = require('react')
const ReactDOM = require('react-dom')
require('../public/style.scss')

const App = React.createClass({
  render () {
    return (
      <h1>Hello World</h1>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
