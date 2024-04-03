import {Component} from 'react'
import SuggestionItemCompo from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: props.suggestionsList,
      inputVal: '',
      copiedArr: props.suggestionsList,
    }
  }

  inputType = event => {
    const {copiedArr} = this.state

    const newArr = copiedArr.filter(filterProp =>
      filterProp.suggestion
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    )

    this.setState({inputVal: event.target.value, suggestions: newArr})
  }

  myArrowImgFun = ID => {
    const {copiedArr} = this.state
    const newFilterArr = copiedArr.filter(filterProp => filterProp.id === ID)
    this.setState({inputVal: newFilterArr[0].suggestion})
  }

  render() {
    const {inputVal, suggestions} = this.state
    return (
      <div className="mainDiv">
        <div className="imgDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleImg"
          />
        </div>
        <div className="inputSection">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="searchIcon"
          />
          <input
            type="search"
            value={inputVal}
            onChange={this.inputType}
            placeholder="Search Google"
            className="inputTag"
          />
          <ul className="ulCl">
            {suggestions.map(mapProp => (
              <SuggestionItemCompo
                key={mapProp.id}
                suggestionData={mapProp}
                myArrowImgFun={this.myArrowImgFun}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
