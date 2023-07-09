import Clock from "./components/Clock";


const App = () => {

  let marks = 90;
  let listItem = ["A", "B", "C", "D"];
  let isLogin = true;

  const handleClick = (text) => {
    console.log(text);
  } 

  return (
    <div>
      <button className="btn btn-success">Im Button</button>
      <button className="btn btn-danger">Danger</button>
      {
        marks > 50 ? 'Passed' : 'Failed'
      }
      {
        (() => {
          let a = 10;
          let b = 20;
          let c = a + b;
          return <h1>{c}</h1>
        })()
      }

      <ul>
        {
          listItem.map((item) => {
            return <li key=''>{item}</li>
          })
        }
        {
          isLogin && <button>Dashboard</button>
        }
      </ul>
      <Clock locale="bn-BD"></Clock>
      <div>
        <button onClick={() => handleClick('Hellooooooooo')}>CHange Language</button>
      </div>
    </div>
  )
}

export default App