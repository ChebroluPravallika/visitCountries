import {Component} from 'react'
import Countries from './Countries'
import VisitedCountry from './VisitedCountry'
import './App.css'

// This is the list (static data) used in the application. You can move it to any component if needed.

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  state = {
    visitedCountriesList: initialCountriesList.filter(
      eachI => eachI.isVisited === true,
    ),
  }

  onVisit = id => {
    const a = initialCountriesList.filter(eachItem => eachItem.id === id)
    this.setState(prevState => ({
      visitedCountriesList: [...prevState.visitedCountriesList, a[0]],
    }))
  }

  onRemove = id => {
    const {visitedCountriesList} = this.state
    const b = visitedCountriesList.filter(eachCon => eachCon.id !== id)
    this.setState({visitedCountriesList: b})
  }

  render() {
    const {visitedCountriesList} = this.state
    console.log('hi', visitedCountriesList)
    return (
      <div
        style={{
          backgroundColor: '#1f1f2f',
          color: 'white',
          padding: '10px',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        <h1>Countries</h1>
        <ul
          style={{
            height: '300px',
            overflow: 'auto',
            backgroundColor: '#ffffff33',
            borderRadius: '10px',
          }}
        >
          {initialCountriesList.map(each => (
            <Countries each={each} key={each.id} onVisit={this.onVisit} />
          ))}
        </ul>
        {visitedCountriesList.length !== 0 && (
          <div>
            <h1>Visited Countries</h1>
            <ul className="visited">
              {visitedCountriesList.map(eachCountry => (
                <VisitedCountry
                  eachCountry={eachCountry}
                  onRemove={this.onRemove}
                  key={eachCountry.id}
                  initialCountriesList={initialCountriesList}
                />
              ))}
            </ul>
          </div>
        )}

        {visitedCountriesList.length === 0 && (
          <div>
            <h1>Visited Countries</h1>
            <p style={{textAlign: 'center'}}>No Countries Visited Yet</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
