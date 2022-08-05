import './App.css'

const Countries = props => {
  const {each, onVisit} = props
  const onClickVisit = () => {
    each.isVisited = true
    onVisit(each.id)
  }
  return (
    <li style={{listStyle: 'none'}} className="countriesList">
      <p>{each.name}</p>
      {each.isVisited && <p>Visited</p>}
      {!each.isVisited && (
        <button type="button" className="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default Countries
