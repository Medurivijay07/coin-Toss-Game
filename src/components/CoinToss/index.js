// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, total: 0, tails: 0, heads: 0}

  onClickingToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {isHead, total, tails, heads} = this.state
    return (
      <div className="main-container">
        <div className="game-card">
          <h1 className="coin-toss">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="coin-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="coin-image"
            />
          )}
          <button
            type="button"
            className="button"
            onClick={this.onClickingToss}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
