import React from 'react';
import NavLink from './NavLink';

export default React.createClass({
  // Navigating Programatically - навигация по программе
  contextTypes: {
    router: React.PropTypes.object
  },

  heandleSubmit(e) {
    const userName = e.target.elements[0].value
    const repo = e.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    // Add path - добавление и переход по пути
    this.context.router.push(path)
    console.log('---', path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to ='repos/reactjs/react-router'>React Router</NavLink></li>
          <li><NavLink to ='repos/facebook/react'>React</NavLink></li>
          <li>
            <form onSubmit={this.heandleSubmit}>
              <input type='text' placeholder='userName'/> / {' '}
              <input type='text' placeholder='repo'/> {' '}
              <button type='submit'>Go</button>
            </form>
          </li>
          {this.props.children}
        </ul>
    </div>
    )
  }
})