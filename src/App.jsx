import Clock from "./components/Clock";
import ContactForm from "./components/ContactForm";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";



const App = () => {

  let marks = 90;
  let listItem = ["A", "B", "C", "D"];
  let isLogin = true;

  const handleClick = (text) => {
    console.log(text);
  }

  const handleSubmit = (e, text) => {
    e.preventDefault();
    console.log(text);
  }


  return (
    <div>
      <Login></Login>
      <Header></Header>
      <Hero title='Learn React'></Hero>
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
          listItem.map((item, key) => {
            return <li key={key}>{item}</li>
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
      <div>
        <form onSubmit={(e) => handleSubmit(e, "hellooo from onsubmit")}>

          <button type="submit">Submit</button>
        </form>
      </div>

      <Demo></Demo>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default App