import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/cart'
import Shelf from './shelf'

class Cart extends Component {
  render () {
    const cartItems = this.props.cart.map((item, index) => {
      return <li key={index}>{item}</li>
    })
    return (
      <div className='cart'>
        <Shelf addItem={this.props.action.addToCart} />
        <h2>Cart Items</h2>
        <ol>
          {cartItems}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
