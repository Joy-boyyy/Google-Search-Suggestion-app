// Write your code here
import './index.css'

function suggestionItemCompo(props) {
  const {suggestionData, myArrowImgFun} = props
  const {suggestion, id} = suggestionData

  const arrowFunClicked = () => {
    myArrowImgFun(id)
  }

  return (
    <li className="li">
      <button type="button" className="btn" onClick={arrowFunClicked}>
        <p>{suggestion}</p>
        <img
          className="arrowImg"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default suggestionItemCompo
