const VisitedCountry = props => {
  const {eachCountry, onRemove} = props
  const {imageUrl, name} = eachCountry
  const {initialCountriesList} = props
  console.log(eachCountry)
  const onClickRemove = () => {
    eachCountry.isVisited = false
    onRemove(eachCountry.id)
  }

  return (
    <li style={{listStyle: 'none'}} className="visitedCountry">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>{eachCountry.name}</p>
        <button type="button" onClick={onClickRemove} style={{height: '30px'}}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
