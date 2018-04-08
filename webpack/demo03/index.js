import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

class Demo03 extends React.Component {
  render() {
    return (
      <div>
        <h4>demo03</h4>
      </div>
    )
  }
}

ReactDOM.render(
  <Demo03 />,
  document.getElementById('container')
)