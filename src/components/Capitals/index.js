import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onchange = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  render() {
    const {activeId} = this.state

    const filteredCaptials = countryAndCapitalsList.filter(
      each => each.id === activeId.toUpperCase(),
    )

    const country =
      filteredCaptials.length > 0 ? filteredCaptials[0].country : ''

    return (
      <div className="page_container">
        <div className="card_container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select_container">
            <select className="selected_list" onChange={this.onchange}>
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="result">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
