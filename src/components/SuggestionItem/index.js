// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {textDetails, updateSearchInput} = props
  const {suggestion} = textDetails

  const changeText1 = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="item">
      <p className="paragraph">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image2"
        onClick={changeText1}
      />
    </li>
  )
}
export default SuggestionItem
