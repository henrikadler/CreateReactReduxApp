import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Shelf extends Component {
  constructor (props) {
    super(props)

    this.onClickAdd.bind(this.onClickAdd)
  }

  onClickAdd (item) {
    this.props.addItem(item)
  }

  render () {
    const shelfItems = this.props.shelfItems.map((item, index) => {
      return <li key={index}><button onClick={() => this.onClickAdd(item)}>[+]</button>{item}</li>
    })
    return (
      <div >
        <h2>Shelf</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    )
  }
}

Shelf.defaultProps = {
  shelfItems: [
    'item1',
    'item2',
    'adler'
  ]
}

Shelf.propTypes = {
  shelfItems: PropTypes.array.isRequired
}

export default Shelf
