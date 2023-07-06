

const App = () => {

  let marks = 90;

  return (
    <div>
      <button className="btn btn-success">Im Button</button>
      <button className="btn btn-danger">Danger</button>
      {
        marks > 50 ? 'Passed' : 'Failed'
      }
    </div>
  )
}

export default App