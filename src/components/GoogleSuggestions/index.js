// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchText = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const resultingList1 = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
        </div>
        <div className="container">
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="image1"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              onChange={this.searchText}
              value={searchInput}
            />
          </div>
          <ul>
            {resultingList1.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                textDetails={eachItem}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
