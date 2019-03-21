import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import Spinner from './Spinner';
import { firestore } from 'firebase'

const db = firestore(firebaseApp)

async function delay (msec) {
  return new Promise(resolve => 
    setTimeout(() => resolve(), msec)
  )
}

export default class Money extends Component {
  state = {
    isLoading: true,
    money: null,
  }

  async componentWillMount() {
    const moneyColl = db.collection('money')
    await delay(1500)
    moneyColl
      .doc('current')
      .get()
      .then(doc => {
        this.setState({ isLoading: false, money: doc.get('value') })
      })
  }

  render () {
    const { isLoading } = this.state

    const loadingEl = (
      <div>
        Loading money status... <Spinner />
      </div>
    )

    const moneyEl = (
      <div>
        Money discovered! It's { this.state.money }💰
      </div>
    )

    return (isLoading) ? loadingEl : moneyEl
  }
}
