import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}
  eatMango = () => {
    this.setState(prevState => {
      return {
        mangoCount: prevState.mangoCount + 1,
        bananaCount: prevState.bananaCount
      }
    })
  }
  eatBanana = () => {
      this.setState(prevState => {
        return {
          mangoCount: prevState.mangoCount,
          bananaCount: prevState.bananaCount + 1
        }
      })
    }
  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <h1 className="headingStyle">
            Bob ate <span className="spanStyle">{mangoCount}</span> mangoes{' '}
            <span className="spanStyle">{bananaCount}</span> bananas
          </h1>
          <div className="itemsContainer">
            <div className="fruitContainer">
              <img
                className="imgStyle"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button onClick={this.eatMango} className="buttonStyle">
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruitContainer">
              <img
                className="imgStyle"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button onClick={this.eatBanana} className="buttonStyle">
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
